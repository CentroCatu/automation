/// <reference types="Cypress" />
// node_modules/.bin/cypress open
describe('Funcionalidad de Registro', function() {

    it('Visualización del botón Registarse', function() {
        cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        cy.get('[href="#/registro"]')
    })

    it('Completar formulario de registro', function() {
        cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        cy.get('[href="#/registro"]').click()
        cy.get('#nombre').type('Anselmo')
        cy.get('#apellido').type('Valenzuela')
        cy.get('#registro-email').type('ansel@gmail.com')
        cy.get('#registro-birthdate').type('2001-08-02')
        cy.get('#registro-birthdate').should('have.value', '2001-08-02')

        cy.get('#registro-address').type('Siempre viva 123')
        cy.get('#registro-password').type('1233456')
        cy.get('#registro-phone').type('273- _)( .')
        cy.get('#registro-phone').should('have.value', '273- _)( .')
    })

    it('Completar formulario de registro y cancelar', function() {
        cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        cy.get('[href="#/registro"]').click()
        cy.get('#nombre').type('Anselmo')
        cy.get('#apellido').type('Valenzuela')
        cy.get('#registro-email').type('ansel@gmail.com')
        cy.get('#registro-birthdate').type('2001-08-02')
        cy.get('#registro-address').type('Siempre viva 123')
        cy.get('#registro-password').type('1233456')
        cy.get('#registro-phone').type('273- _)( .')
        cy.contains('Cancelar').click()
    })

    // it('Registro de usuario', function() {
    //     cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    //     cy.get('[href="#/registro"]').click()
    //     cy.get('#nombre').type('Anselmo')
    //     cy.get('#apellido').type('Valenzuela')
    //     cy.get('#registro-email').type('ansel@gmail.com')
    //     cy.get('#registro-birthdate').type('2001-08-02')
    //     cy.get('#registro-address').type('Siempre viva 123')
    //     cy.get('#registro-password').type('1233456')
    //     cy.get('#registro-phone').type('3416123456')
    //     cy.contains('Cancelar').click()
    // })

    it('Ferificar el valor ingresado en fecha de nacimiento', function() {
        cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        cy.get('[href="#/registro"]').click()
        cy.get('#registro-birthdate').type('2001-08-02')
        cy.get('#registro-birthdate').should('have.value', '2001-08-02')
    })
})