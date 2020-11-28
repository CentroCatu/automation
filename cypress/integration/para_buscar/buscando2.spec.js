///<reference types = "cypress"/>
describe("buscando", function () {
    it("buscando", function () {
        cy.visit("http://127.0.0.1:7331/")
        cy.contains("Salchicha").parent('.perro').contains('Puntaje').click()
        cy.contains("Salchicha").closest('.perro').find('.puntaje').eq(1).click()
    })
})

/**
 * numeros
 * texto
 * array
 * objetos literales
 * funciones
 * funciones anónimas
 * variables
 * 
 */