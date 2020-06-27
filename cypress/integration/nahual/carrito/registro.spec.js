/// <reference types="Cypress" />
describe('', function() {
    it( ('CCC1-CCC2 Verificar visualización del botón "Registrarse" y Validar el campo "Nombre" con caracteres Numéricos.'), function() {
      
    cy.visit ('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.contains("Registrarse").click()
    cy.contains("Nombre").click().type('223242') 
    cy.get('#nombre').should('have.value','')  
  })
})
  
describe('', function() {
  it( '', function() {
    cy.visit ('https://nahual-app-carrito.herokuapp.com/#/store')
    cy.contains("Registrarse").click()    
    cy.contains("Nombre").click().type('Facundo') 
    cy.contains("Apellido").click().type('Gomez') 
  })
})









