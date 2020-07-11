/// <reference types="Cypress"/>
describe('', () => {
    it( (''), () => {
        cy.visit('https://nahual-app-carrito.herokuapp.com/#/store');
        cy.get('a:contains("agregar al carrito")').first().click();
        cy.contains('productos').click();
        cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', 'Producto');
        cy.get(':nth-child(1) > .tdCenter').should('have.text','Cantidad');
        cy.get(':nth-child(1) > .tdRight').should('have.text','Precio');

        
    })

})