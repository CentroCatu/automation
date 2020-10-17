///<reference types = "cypress"/>
describe("buscando", function () {
    it("buscando", function () {
        cy.visit("http://127.0.0.1:8887/indeex.html")
        //cy.contains('Servicios').parent().contains("Testing Manual")
        cy.contains('Servicios').parent().contains("Paginas Web").parent().contains("Precio")
    })
})