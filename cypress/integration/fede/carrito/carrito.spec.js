/// <reference types="Cypress" />
describe('Test Cases Busquedas', function () {
    it(('Buscar Fede sin resultados'), function () {
  
      cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
      cy.get('.ng-pristine').type('Fede')
      cy.get(':nth-child(1) > .tdRight > a')
      .should('contain', '0 productos')
    })
  })
