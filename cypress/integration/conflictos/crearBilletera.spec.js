/// <reference types="Cypress" />
// https://docs.cypress.io/guides/core-concepts/conditional-testing.html#The-DOM-is-unstable
// node_modules/.bin/cypress open
describe('Funcionalidad de Billetera', function () {
    beforeEach(() => {        
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get("[aria-label='Close']").click()
    })
    it('Creación de Billetera', function () {
        let nombres = [ 'Maxi', 'Ale', 'Diego']
        // crearBilleteraDe(nombres[0])
        // crearBilleteraDe(nombres[1])
        // crearBilleteraDe(nombres[2])
        crearVariasBilleteras(nombres)
       
        verificarBilleteraDe(nombres[0])
        verificarBilleteraDe(nombres[1])
        verificarBilleteraDe(nombres[2])
    })

    it('Existe el nombre ingresado?', function () {
        let nombre = [ 'AlePan']
        cy.get('[data-tut="wallets"]').then(($wallets) => {
            if ($wallets.text().includes(nombre[0])) {
                verificarBilleteraDe(nombre[0])
            } else {
                verificarNoExisteBilleteraDe(nombre[0])
            }
          })
    })

    it.only('Creación de Billetera si no Existe el nombre ingresado', function () {
        let nombre = ['Maxi']
        cy.get('[data-tut="wallets"]').then(($wallets) => {
            if ($wallets.text().includes(nombre[0])) {
                verificarBilleteraDe(nombre[0])
            } else {
                verificarNoExisteBilleteraDe(nombre[0])
                crearBilleteraDe(nombre[0])
            }
          })
    })
    it('Verificación del campo alias', function () {
        cy.get('#generateWallet').should('be.disabled')
        cy.get('#generateKeys').click()
        cy.get('#alias').type(' ')
        cy.get('#generateWallet').should('be.disabled')
    })
    it('Verificación creacion de usuario con alias vacio', function () {  
        cy.get('#generateKeys').click()
        cy.get('#alias').type(' ')
        cy.get('#generateWallet').click()
        cy.get('[class="card elementFlash"]').find('[class="card-title"]').should('not.have.text', ' ')
    })
})

function verificarBilleteraDe(nombre){
    cy.get('[data-tut="wallets"]').contains(nombre).should('be.visible')
}

function verificarNoExisteBilleteraDe(nombre){
    cy.get('[data-tut="wallets"]').contains(nombre).should('not.be.visible')
}

function crearBilleteraSiNoExtiste(nombre){
    console.log(cy.get('[data-tut="wallets"]').contains(nombre).should('be.visible'))
    
}

function crearBilleteraDe(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('#generateWallet').click()
    
}

function crearVariasBilleteras(nombres) {
    for (let index = 0; index < nombres.length; index++) {
        crearBilleteraDe(nombres[index])
    }
}