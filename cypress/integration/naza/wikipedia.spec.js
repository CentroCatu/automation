/// <reference types="Cypress" />
describe('Donaciones', function() {
    it('Selección de opción de donación', function() {
        cy.visit("donate.wikimedia.org")
        cy.wait(6000)
        cy.get("#input_amount_other_box").type(400)
    })
  })