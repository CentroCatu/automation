/// <reference types="Cypress" />

// node_modules/.bin/cypress open
describe('Funcionalidad de Billetera', function () {
    beforeEach(() => {        
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get("[aria-label='Close']").click()
    });

    it('Creación de Billetera', function () {
        let nombres = [ 'Maxi', 'Ale', 'Diego']
        crearBilleteras(nombres)
        verificarBilleteras(nombres)
    });
})

/**
 * Función para crear multiples billeteras
 * @param {*} nombres lista de nombres
 */
function crearBilleteras(nombres) {
    nombres.forEach( nombre => {
        console.log(`creando la billetera para el nombre ${nombre}`)
        crearBilletera(nombre)
    });
}

/**
 * Función para verificar multiples billeteras
 * @param {*} nombres lista de nombres
 */
function verificarBilleteras(nombres) {
    nombres.forEach( nombre => {
        console.log(`verificando la creacion de la billetera para el nombre ${nombre}`)
        verificarBilletera(nombre)
    });
}

/**
 * Funcion para verificar una sola billetera
 * @param {*} nombre nombre a verificar
 */
function verificarBilletera(nombre){
    cy.get('[data-tut="wallets"]').contains(nombre).should('be.visible')
}

/**
 * Funcion para crear una sola billetera
 * @param {*} nombre nombre a verificar
 */
function crearBilletera(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('#generateWallet').click()
}