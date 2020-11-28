/// <reference types="Cypress" />
// node_modules/.bin/cypress open

function getTimeOut(selector, tiempo){    
    return cy.get(selector, {timeout:tiempo});
}

describe('Funcionalidad de Registro', function() {

    beforeEach(() => {        
        cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        cy.get('[href="#/registro"]').click()
    })

    it('Completar formulario de registro', function() {
        // cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        // cy.get('[href="#/registro"]').click()
        cy.get('#nombre').type('Anselmo')
        cy.get('#apellido').type('Valenzuela')
        cy.get('#registro-email').type('ansel@gmail.com')
        cy.get('#registro-birthdate').type('2001-08-02')
        cy.get('#registro-birthdate').should('have.value', '2001-08-02')

        cy.get('#registro-address').type('Siempre viva 123')
        cy.get('#registro-password').type('1233456')
        cy.get('#registro-phone').type('273- _)( .')
    })

    it.only('Completar formulario de registro y cancelar', function() {
        cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        cy.get('[href="#/registro"]').click()
        cy.get('#nombre',{timeout:20000}).type('Anselmo')
        cy.get('#apellido').type('Valenzuela')
        cy.get('#registro-email').type('ansel@gmail.com')
        cy.get('#registro-birthdate').type('2001-08-02')
        cy.get('#registro-address').type('Siempre viva 123')
        cy.get('#registro-password').type('1233456')
        cy.get('#registro-phone').type('273- _)( .')
        cy.contains('Cancelar').click()
    })

    it.only('Registro de usuario', function() {
        // cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        // cy.get('[href="#/registro"]').click()
        cy.get('#nombre').type('Anselmo')
        cy.get('#apellido').type('Valenzuela')
        cy.get('#registro-email').type('ansel@gmail.com')
        cy.get('#registro-birthdate').type('2001-08-02')
        cy.get('#registro-address').type('Siempre viva 123')
        cy.get('#registro-password').type('1233456')
        cy.get('#registro-phone').type('34161234')
        // cy.get('body > div.container-fluid.ng-scope > div > div > div > div > div:nth-child(1) > form > button').click()
        cy.get('body').click()
        cy.get('button').contains('Registrarse').click()
    })

    it('Ferificar el valor ingresado en fecha de nacimiento', function() {
        // cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
        // cy.get('[href="#/registro"]').click()
        cy.get('#registro-birthdate').type('2001-08-02')
        cy.get('#registro-birthdate').should('have.value', '2001-08-02')
    })
})