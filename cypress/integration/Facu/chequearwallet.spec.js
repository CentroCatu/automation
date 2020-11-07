// <reference types="Cypress" />

beforeEach(() => {
    cy.visit('https://alpa84.github.io/coin?do_not_log')
    cy.get('[aria-label="Close"] > svg').click()
})

describe(' ', function () {
    it((''), function () {
        cy.get('#generateKeys').click()
        cy.get('#alias').type('AlePan')
        cy.contains('Wallet Generator').parent().find('.alert').contains('That alias already exists, please select another one.')
    })
})