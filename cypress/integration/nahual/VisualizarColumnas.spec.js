/// <reference types="Cypress" />



describe('CCC-30-Visualizar Columnas en pagina', function () {
    it(('Verificar Columnas cantidad de productos'), function () {
  
      cy.visit('https://nahual-app-carrito.herokuapp.com/#/store')
      cy.get(':nth-child(2) > :nth-child(4) > a').click()
      cy.get(':nth-child(1) > .tdRight > a').click()
      cy.get(':nth-child(1) > :nth-child(1) > b').should('have.text', 'Producto')
      cy.get(':nth-child(1) > .tdCenter > b').should('have.text', 'Cantidad')
      cy.get(':nth-child(1) > .tdRight > b').should('have.text', 'Precio')
    })
  })