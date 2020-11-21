/// <reference types="Cypress" />
describe("Pruebas generales", function(){
    it("Visita un sitio", function(){
        cy.visit("https://facebook.com")
    })
})