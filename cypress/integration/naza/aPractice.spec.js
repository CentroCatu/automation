/// <reference types="Cypress" />

//para correr cypress  node_modules/.bin/cypress open
describe("Pruebas sobre Fade", function(){
    it("Buscar Face", function(){
        cy.visit("http://automationpractice.com/")
        cy.get('#search_query_top').type('Faded{enter}')
        // evalua si existe, no es necesario para hacer click
        cy.contains("Add to cart").should('exist')
        cy.contains('Add to cart').click()
        // evalua si existe, no es necesario para hacer click
        cy.contains("Proceed to checkout").should('exist')
        cy.contains('Proceed to checkout').click()
        // click 2 veces sobre el botón de más para agregar 2 productos más
        cy.get('#cart_quantity_up_1_1_0_0 > span').click()
        cy.get('#cart_quantity_up_1_1_0_0 > span').click()
        cy.get("#total_price").should("have.text", "$51.53")
    })
})
