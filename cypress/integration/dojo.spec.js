/// <reference types="Cypress" />
describe('Funcionalidad quejas', function() {
    it('Burla al usuario', function() {
      cy.visit('http://the-internet.herokuapp.com/ ')
      cy.contains('Checkboxes').click()
      cy.get('[type="checkbox"]').first().check()
      cy.get('[type="checkbox"]').first().uncheck()
      // cy.get('#input-quejas').type('sacate la rayita del pelo')
      //  cy.contains('Enviar').click()
      // cy.get('#lugar-burla').should('contain', 'siciti li riyiti dil pili')
      // cy.contains('Contador de Videos').click()
      // for (let index = 0; index < 2; index++) {
      //   cy.contains('Agregar Uno').click()   
      // }
    })
  })