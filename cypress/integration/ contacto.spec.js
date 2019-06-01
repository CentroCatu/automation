/// <reference types="Cypress" />
describe('Funcionalidad quejas', function() {
    it('Burla al usuario', function() {
      cy.visit('https://nahual.github.io/qc-contactos/contactos.html')
      for (let index = 0; index < 6; index++) {
        
        cy.contains('Nuevo Contacto').click()
        cy.get('#contact-name').type('Anselmo'+index)
        cy.get('#contact-mail').type(index + 'anselmo@gmail.com')
        cy.contains('Guardar').click()
      }
      cy.get(':nth-child(1) > :nth-child(4) > .icon-remove').click()
      cy.get(':nth-child(2) > :nth-child(4) > .icon-pencil').click()
      cy.get('#contact-name').type('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      cy.contains('Guardar').click()
      cy.get('.brand').should('have.text','Contactos ')
      cy.get('.help-inline').should('have.text','El nombre del contacto no puede superar los 35 caracteres')
    })
  })