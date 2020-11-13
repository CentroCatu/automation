/// <reference types="Cypress" />
// node_modules/.bin/cypress open
describe('Funcionalidad de contactos', function() {

    it('Creación de contactos', function() {
        cy.visit('https://nahual.github.io/qc-contactos/contactos.html')
        let nombres = ['Naza', 'Ansel', 'Caro', 'Ale']
        let correos = ['nazaM', 'anselmo.v', 'caro.s', 'ale.p']
        crearVariosContactos(nombres, correos)
    })
})

function crearContacto(nombre, correo) {
    cy.contains('Nuevo Contacto').click()
    cy.get('#contact-name').type(nombre)
    cy.get('#contact-mail').type(correo + '@gmail.com')
    cy.contains('Guardar').click()
}

function crearVariosContactos(nombres, correos) {
    for (let index = 0; index < nombres.length; index++) {
        crearContacto(nombres[index], correos[index])
    }
}