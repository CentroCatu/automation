/// <reference types="Cypress" />
describe('Funcionalidad quejas', function() {
    it('Burla al usuario', function() {
      cy.visit('http://facebook.com')
        cy.get('#email').type('maaxiipereyraa@gmail.com')
        cy.get('#pass').type('maxipereyra')
        cy.contains('Iniciar sesión').click()
        cy.
    })
  })