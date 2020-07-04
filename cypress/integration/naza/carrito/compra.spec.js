/// <reference types="Cypress" />
describe('CCC-4-Verificar busqueda con palabras en campo de texto', function () {
  it(('Buscar Manzana'), function () {

    cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')
    cy.get('tbody > .ng-scope > :nth-child(2)').should('contain', 'Manzana')
  })
})


describe('CCC-25:Verificar campo costo total', function () {

  it(('Verificar el precio al sumar 2 Manzanas'), function () {

    cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')
    cy.get(':nth-child(4) > a').click()
    cy.get(':nth-child(4) > a').click()

    cy.get(':nth-child(1) > .tdRight > a > :nth-child(3)').should("have.text", "$80.00")
    cy.get(':nth-child(3) > .tdRight > a > :nth-child(3)').should("have.text", "$80.00")
    cy.get('.ng-scope > .tdRight').should("contain", "$40.00 / Kg.")

  })

  it(('Verificar el precio unitario de Manzana'), function () {

    cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')
    cy.get(':nth-child(4) > a').click()

    cy.get('.ng-scope > .tdRight').should("contain", "$40.00 / Kg.")

  })


})



