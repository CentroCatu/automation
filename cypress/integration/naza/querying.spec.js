/// <reference types="Cypress" />
// pararnos desde la consola en la carpeta de cypress en donde se encuentra package.json
// node_modules/.bin/cypress open

describe('Test Todo MVC Suite', ()=> {
    it('Redirección a Celfar', ()=> {
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
    })
})