/// <reference types="Cypress" />
// node_modules/.bin/cypress open

describe('Para buscar', function() {

    beforeEach(() => {        
        cy.visit('http://127.0.0.1:8887/')
        // cy.get("body > div > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > a")
        
    })

    it('Click a Link1 de la sección Links', function() {
        //cy.get(':nth-child(2) > :nth-child(2) > a').click()
        cy.contains('Links').parent().parent().contains('link 1').click()
    })

    it('Click a Puntaje de Perro salchicha', function() {
        cy.get('#perros > .perro').contains('Salchicha').parent().contains('Puntaje').click()
    })
    
    it('Metodo closest Click a Puntaje de Perro salchicha', function() {
        cy.contains('Salchicha').closest('.perro').contains('Puntaje').click()
    })

    it('Metodo closest + find + should con Click a Puntaje 7 de Perro galgo', function() {
        cy.contains('Galgo').closest('.perro').find('.puntaje').should('have.text', '7').click()
    })

    it('Metodo closest + find + equ con Click a Puntaje 10 de Perro salchicha', function() {
        cy.contains('Salchicha').closest('.perro').find('.puntaje').eq(1).click()
    })

})