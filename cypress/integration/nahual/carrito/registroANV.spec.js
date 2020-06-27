/// <reference types="Cypress" />
describe('', function() {
    it('Chequea el valor de la Fecha de nacimiento', function() {
 
    cy.visit ('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.contains("Registrarse").click()
    cy.get('#nombre').click().type("Maxi")
    cy.get('#apellido').click().type("Fulano")
    cy.get('#registro-birthdate').click().type("2001-08-02")
    cy.get('#registro-birthdate').should('have.value','2001-08-02')
    cy.get('#registro-phone').type("273- _)( .")
    cy.get('#registro-phone').should('have.value','273- _)( .')
    })
  }) 