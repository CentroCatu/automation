/// <reference types="Cypress" />

// https://nahual.github.io/qc-celfar/especificaciones.html
// https://docs.cypress.io/api/api/table-of-contents.html
// node_modules/.bin/cypress open

describe('Visualización de elemento Celfar', function() {
    it('Redirección a Celfar', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#description > nth-child(1)').should('exit')

    })
    it('Visualización de enlace de Celcius', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('[href="http://es.wikipedia.org/wiki/Grado_Celsius"]').should('exist')       
    })
    it('Visualización de enlace de Celcius', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.contains('Celcius').should('have.attr' , '[href="http://es.wikipedia.org/wiki/Grado_Celsius"]')     
    })
    // revisar
    it('Visualización de enlace de Celcius', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.contains('Celcius').click()
        cy.url().should('eq', 'www.wikki....')

  })