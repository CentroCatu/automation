/// <reference types="Cypress" />
describe('Verificar busqueda con palabras en campo de texto', function() {
    it( (''), function() {
      
    cy.visit ('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')  
    cy.get('tbody > .ng-scope > :nth-child(2)').should('contain', 'manzana')
  })
})
  



