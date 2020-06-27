/// <reference types="Cypress" />
describe('CCC-4-Verificar busqueda con palabras en campo de texto', function() {
    it( (''), function() {
      
    cy.visit ('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')  
    cy.get('tbody > .ng-scope > :nth-child(2)').should('contain', 'Manzana')
  })
})  


describe('CCC-25:Verificar campo costo total', function() {
    it( (''), function() {
      
    cy.visit ('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.get('.ng-pristine').type('Manzana')  
    cy.get(':nth-child(4) > a').click()
    cy.get(':nth-child(4) > a').click()
 
    var precio = cy.get('.ng-scope > .tdRight').innerText
    console.log('valor' + precio ) 
})
})



