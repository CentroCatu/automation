/// <reference types="Cypress" />
describe('', function() {
    it('Chequea el valor de la Fecha de nacimiento', function() {
 
    cy.visit ('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.contains("Registrarse").click()
    cy.contains("Nombre").click().type("Maxi")
    cy.contains("Apellido").click().type("Fulano")
    cy.contains("Fecha de nacimiento").click().type("2001-08-02")
    cy.get('#registro-birthdate').should('have.value','2001-08-02')
    
    })
  }) 