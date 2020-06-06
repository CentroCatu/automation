/// <reference types="Cypress" />

//para correr cypress  node_modules/.bin/cypress open
describe("Pruebas criptico", function(){
    it("Hacer criptico", function(){
        cy.visit("http://localhost:5000")
        cy.get('#generateKeys').click()
        
        cy.get("#alias").type("naza")
        cy.get("#generateWallet").click()
        
        cy.get("h3").should("contain", "Naza")
        // for(var i=0; i<10; i++){
        //     cy.get("h3").should("contain", "Naza")
        // }
        //cy.get('.Wallets > .panel > .panel-body').should('contain', 'Naza')      
    })
})