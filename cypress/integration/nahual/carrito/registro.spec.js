/// <reference types="Cypress" />
describe('', function() {
    it('', function() {
      
    cy.visit ('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.contains("Registrarse").click()
    cy.contains("Nombre").click().type(223242)
    })
  }) 