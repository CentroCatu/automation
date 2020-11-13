/// <reference types="Cypress" />

//para correr cypress  node_modules/.bin/cypress open
describe('Busquedas en Google', function() {
    // it('Ingreso a Google', function() {
    //     cy.visit('https://www.google.com')
    //     cy.contains('Imágenes').click()
    //     cy.get(':nth-child(2) > .gb_g').click()
    // })
    // it('Enlace de imágenes', function() {
    //     cy.visit('https://www.google.com')
    //     // cy.contains('Imágenes').click()
    //     // cy.get(':nth-child(2) > .gb_g').click()
    // })
    it('Campo de búsqueda', function() {
        cy.visit('https://www.google.com')
        // Esta sentencia ingresa Catu Testing en el campo y luego da enter
        cy.get('.gLFyf').type('Catu Testing{enter}')
        //cy.get('#lga').click()
        //cy.get('.FPdoLc > center > .gNO89b').click()   
    })
    
  })
