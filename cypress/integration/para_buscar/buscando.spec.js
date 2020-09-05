///<reference types = "cypress"/>
describe("buscando", function () {
    it("buscando", function () {
        cy.visit("http://127.0.0.1:7331/")
        // cy.get(":nth-child(2) > :nth-child(2) > a");
        // cy.get('h2').contains('Links').parent().within(()=> {
        //     cy.contains('link 1')
        // })
        // cy.get('h3').contains('Salchicha').parentsUntil('.perro').within(()=> {
        //     cy.get('.puntaje').should('have.text', '8')
        // })
        // cy.contains('Salchicha').closest('.perro').find('.puntaje').should('have.text', '8')
        // cy.contains("Salchicha").closest('.perro').contains("Puntaje")
        cy.contains("Salchicha").parent('.perro').contains('Puntaje').click()
        cy.contains("Salchicha").closest('.perro').find('.puntaje').eq(1).click()
    })
})