/// <reference types="Cypress" />

function prueba (item){
    console.log("Esta es la prueba de "+item);
    console.log("-------------------------");
}

describe("Probando Alias", function(){

    beforeEach('Redirección a Celfar', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').as('campoTexto')
        cy.get("[type='submit']").as('convertir')
        cy.get('#output').as('resultado')       
    })

    it('Título de la página', function() {
        cy.title().should('eq', 'Conversor CelFar')
        prueba("Título de la página");
    })
    it('Título de la aplicación', function() {
        cy.get('h1').should('have.text', 'CelFar')
        prueba("Título de la aplicación");
    })
    
    it('Convertir 20 a farenheit', function(){
        prueba("Convertir 20 a farenheit");
        cy.get('@campoTexto').type('20')
        cy.get('@convertir').click();
        // cy.get('@resultado').then(function(span){
        //     const r= span.text();
        //     console.log(r);
        //     return r;
        // }).as('resultado_numero')
        // cy.get('@resultado_numero').then(function(valor_convertido){

        //     expect(parseInt(valor_convertido)).to.eq(68)
        // })
        cy.get('@resultado').should('have.text', '68')
    
    })

    it('Convertir 50 a farenheit', function(){
        prueba("Convertir 50 a farenheit");
        cy.get('@campoTexto').type('50')
        cy.get('@convertir').click();
        // cy.get('@resultado').then(function(span){
        //     const r= span.text();
        //     console.log(r);
        //     return r;
        // }).as('resultado_numero')
        // cy.get('@resultado_numero').then(function(valor_convertido){

        //     expect(parseInt(valor_convertido)).to.eq(122)
        // })
        cy.get('@resultado').should('have.text', '122')    
    
    })

});