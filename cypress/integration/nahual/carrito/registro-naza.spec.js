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
        cy.get('#nombre').type('Anselmo')
        cy.get('#apellido').type('Valenzuela')
        cy.get('#registro-email').type('ansel@gmail.com')
        cy.get('#registro-birthdate').type('2001-08-02')
        cy.get('#registro-address').type('Siempre viva 123')
        cy.get('#registro-password').type('1233456')
        cy.get('#registro-phone').type('3416123456')
        cy.contains('Registrarse').click()
    })
})