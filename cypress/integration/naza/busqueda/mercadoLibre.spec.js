/// <reference types="Cypress" />
describe('Comparación elementos', function() {
    // it('Comprobar filtrar', function() {
    //     cy.visit("https://www.mercadolibre.com.ar/")
    //     cy.contains("Ver todas").click()
    //     cy.get('.toggle_menu__mobile').should('have.text','Filtrar')
    // })
    it('Comprobar Descubrí', function() {
        cy.visit("https://www.mercadolibre.com.ar/")
        //cy.contains("Descubrí").should('exist')
        cy.get(':nth-child(5) > .container > .section-header > h1').should('have.text','Descubrí')
    })
  })