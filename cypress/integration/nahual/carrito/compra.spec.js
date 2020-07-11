// <reference types="Cypress" />

beforeEach(() => {
  cy.visit ('https://nahual-app-carrito.herokuapp.com/#/cart')
  cy.get ('.btn-danger').click() 
})

describe('CCC-4-Verificar busqueda con palabras en campo de texto', function () {
  it((''), function () {

    cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')
    cy.get('tbody > .ng-scope > :nth-child(2)').should('contain', 'Manzana')
  })
})


describe('CCC-25:Verificar campo costo total', function () {
  it((''), function () {

    cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')
    cy.get(':nth-child(4) > a').click()
    cy.get(':nth-child(4) > a').click()
    cy.get(':nth-child(1) > .tdRight > a > :nth-child(3)').should('have.text', '$80.00')
    cy.get(':nth-child(3) > .tdRight > a > :nth-child(3)').should('have.text', '$80.00')
    cy.get('.ng-scope > .tdRight').should('contain', '$40.00 / Kg.')
  })
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
 
describe.only('CCC-2l9:Boton vaciar carrito', function () {
  it((''), function () {

    cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Frutilla')
    cy.get(':nth-child(4) > a').click()
    cy.get(':nth-child(1) > .tdRight > a').click()
    cy.get('tbody > .ng-scope > :nth-child(1)').should('have.text','Frutilla')
    cy.get(':nth-child(4) > .tdCenter').should('have.text','1')
    cy.get('.btn-danger').click() 
    cy.get('[ng-hide="cart.getTotalCount() > 0"] > .tdCenter').should('contain.text','Carrito vacio.')
    cy.get(':nth-child(3) > .tdCenter').should('have.text','0')
    cy.get(':nth-child(3) > .tdRight').should('have.text','$0.00')
    cy.get('tbody > .ng-scope > :nth-child(1)').should('not.exist')
    
  })
})

