/// <reference types="Cypress" />
describe ("Pruebas Generales", function(){
    it("Visita un Sitio", function(){
        cy.visit("https://www.google.com/")
    })
})