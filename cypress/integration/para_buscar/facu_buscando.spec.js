// <reference types="Cypress" />

beforeEach(() => {
    cy.visit ('http://127.0.0.1:8887/')
  })
  
  describe(' ', function () {
    it((''), function () {
        
        cy.contains('Links').parent().contains('link 1').click()
        cy.get('#perros > h2').parent().contains('Salchicha').parent().contains('Puntaje').click()

    
    })
  })
  