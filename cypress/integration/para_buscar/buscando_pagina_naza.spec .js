/// <reference types="Cypress" />
// node_modules/.bin/cypress open
// Comando para forzar la apertura de cypress desde una terminal windows
// npx cypress open

describe('Ejercicios Para buscar elementos', function() {

    beforeEach(() => {        
        cy.visit('http://127.0.0.1:8887/')        
    })

    it.only('Seleccionar en el elemento testing manual en la sección de Serviciós', function() {
        cy.get('h1').contains('Servicios').closest('.section').contains('testing manual')
    })

    it('Hacer click en el elemento Precio de páinas web en la sección de Serviciós', function() {
        cy.contains('páginas web').parent().contains('Precio').click()
    })

})