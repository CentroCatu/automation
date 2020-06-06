/// <reference types="Cypress" />
// node_modules/.bin/cypress open
describe('Funcionalidad de Registro', function() {

    it('Visualización del botón Registarse', function() {
        cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        cy.get('[href="#/registro"]')
    })

    it('Verificar campo nombre', function() {
        cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        cy.get('[href="#/registro"]').click()
        cy.get()
    })
})