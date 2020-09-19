/// <reference types="Cypress" />
// node_modules/.bin/cypress open

describe('Ejercicios Para buscar elementos', function() {

    beforeEach(() => {        
        cy.visit('http://127.0.0.1:8887/')        
    })

    it('Seleccionar en el elemento testing manual en la sección de Serviciós', function() {
        cy.contains('testing manual').parent()
    })
    
    it('Hacer click en el elemento Precio de páinas web en la sección de Serviciós', function() {
        cy.contains('páginas web').parent().contains('Precio').click()
    })

})