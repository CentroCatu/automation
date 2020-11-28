/// <reference types="Cypress" />

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
       
        verificarBilletera(nombres[0])
        verificarBilletera(nombres[1])
        verificarBilletera(nombres[2])
    })
})

function verificarBilletera(nombre){
    cy.get('[data-tut="wallets"]').contains(nombre).should('be.visible')
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