/// <reference types="Cypress" />
<<<<<<< HEAD
describe('CCC-4-Verificar busqueda con palabras en campo de texto', function () {
  it(('Buscar Manzana'), function () {
=======

beforeEach(() => {
  cy.visit ('https://nahual-app-carrito.herokuapp.com/#/cart')
  cy.get ('.btn-danger').click() 
})

describe('CCC-4-Verificar busqueda con palabras en campo de texto', function () {
  it((''), function () {
>>>>>>> 9ad6d8e7dc8cc081ba9f088d14f3cbeb76abf8f5

    cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')
    cy.get('tbody > .ng-scope > :nth-child(2)').should('contain', 'Manzana')
  })
})

<<<<<<< HEAD

describe('CCC-25:Verificar campo costo total', function () {

  it(('Verificar el precio al sumar 2 Manzanas'), function () {
=======

describe('CCC-25:Verificar campo costo total', function () {
  it((''), function () {
>>>>>>> 9ad6d8e7dc8cc081ba9f088d14f3cbeb76abf8f5

    cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')
    cy.get(':nth-child(4) > a').click()
    cy.get(':nth-child(4) > a').click()
<<<<<<< HEAD

    cy.get(':nth-child(1) > .tdRight > a > :nth-child(3)').should("have.text", "$80.00")
    cy.get(':nth-child(3) > .tdRight > a > :nth-child(3)').should("have.text", "$80.00")
    cy.get('.ng-scope > .tdRight').should("contain", "$40.00 / Kg.")
  })

=======
    cy.get(':nth-child(1) > .tdRight > a > :nth-child(3)').should('have.text', '$80.00')
    cy.get(':nth-child(3) > .tdRight > a > :nth-child(3)').should('have.text', '$80.00')
    cy.get('.ng-scope > .tdRight').should('contain', '$40.00 / Kg.')
  })
>>>>>>> 9ad6d8e7dc8cc081ba9f088d14f3cbeb76abf8f5
})


describe('CCC-30:Visualizar columnas Khamil', function () {
  it((''), function () {

    cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Banana')
    cy.get(':nth-child(4) > a').click()
    cy.get(':nth-child(1) > .tdRight > a').click()
    cy.get(':nth-child(1) > :nth-child(1) > b').should('have.text', 'Producto')
    cy.get(':nth-child(1) > .tdCenter > b').should('have.text', 'Cantidad')
    cy.get(':nth-child(1) > .tdRight > b').should('have.text', 'Precio')
  })
})

