/// <reference types="Cypress" />
// node_modules/.bin/cypress open

describe('Ejercicios Para buscar elementos', function() {

    beforeEach(() => {        
        cy.visit('http://127.0.0.1:8887/')
        // cy.get("body > div > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > a")
        
    })

    it('Seleccionar en el elemento testing manual en la sección de Serviciós', function() {
        cy.contains('testing manual').parent()
    })
    it('Hacer click en el elemento Precio de páinas web en la sección de Serviciós', function() {
        cy.contains('páginas web').parent().contains('Precio').click()
    })

})