//validar conversion 0°C => 32°F
// https://nahual.github.io/qc-celfar/
/*/// <reference types="Cypress" />*/
describe('Validar conversión', function() {
    it('Conversion de 0C a 32F', function() {
        // Ingresar al sitio web de la aplicación.
        cy.visit("https://nahual.github.io/qc-celfar/");
        // Seleccionar el campo de texto para ingresar el valor 0.
        cy.get('#input').type('0');
        // Seleccionar el botón convertir! y hacer click.
        cy.get('.button').click();
        // Seleccionar el campo de texto y verificar que el resultado esperado sea 32.
        cy.get('#output').should('contain', '32');
        cy.get('#output').should('have.text', '32');
    });
});
