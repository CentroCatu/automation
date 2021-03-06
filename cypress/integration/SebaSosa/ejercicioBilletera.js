/// <reference types="Cypress" />

function nuevaBille(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('#generateWallet').click()
}
function comprobar(nombre) {
    cy.get('[data-tut="wallets"]').contains(nombre)
}

function crearTransaccion(dador, receptor, cantidad, privateKey) {
    cy.get('#toPublishGives').select(dador)
    cy.get('#toPublishReceives').select(receptor)
    cy.get('#toPublishAmount').type(cantidad)
    cy.get('#toPublishPass').type(privateKey)
    cy.get('#toPublishSign').click()
    cy.get('#toPublishPublish').click()
    cy.get('[data-tut="notIncludedYet"]').contains(receptor)

}

beforeEach(() => {
    cy.visit('https://alpa84.github.io/coin/?do_not_log')
    cy.get('[aria-label="Close"] > svg').click()
})

describe('Billeteras', function () {
    it(('Crear y comprobar billeteras'), function () {
        nuevaBille('Maxi')
        nuevaBille('Diego')
        nuevaBille('Ale')
        comprobar('Maxi')
        comprobar('Diego')
        comprobar('Ale')


    })
    it.only(('Transacciones'), function () {

        crearTransaccion('AlePan', 'SomeUser', '3', '65537,32738739318480270880847344601765335773851669760144296954546538700397943059327')
        crearTransaccion('AlePan', 'Athena', '5', '65537,32738739318480270880847344601765335773851669760144296954546538700397943059327')

    })
})