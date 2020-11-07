/// <reference types="Cypress" />

// node_modules/.bin/cypress open
let nombres = [ 'Maxi', 'AlePan']
describe('Funcionalidad de Billetera', function () {
    beforeEach(() => {        
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get("[aria-label='Close']").click()
    })

    it('Creación de Billetera', function () {        
        crearBilleteraDe(nombres[0])      
        verificarBilletera(nombres[0])
    })

    it('Creación de Billetera con Alias existente', function () {        
        completarDatos(nombres[1])
        verificarSiExisteAlias()
    })
})

function verificarBilletera(nombre){
    cy.get('[data-tut="wallets"]').contains(nombre).should('be.visible')    
}

function verificarSiExisteAlias(){
    cy.get('.alert').contains('That alias already exists, please select another one.').should('exist')
}

function completarDatos(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)    
}


function crearBilleteraDe(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('[class="alert alert-danger"]').should('not.exist')
    cy.get('#generateWallet').click()    
}

function crearVariasBilleteras(nombres) {
    for (let index = 0; index < nombres.length; index++) {
        crearBilleteraDe(nombres[index])
    }
}