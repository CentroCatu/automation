// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('https://alpa84.github.io/coin?do_not_log')
  cy.get('[aria-label="Close"] > svg').click()
})

describe(' ', function () {
  it((''), function () {
    cy.contains('Block 1').closest('.card.border-primary').contains('Nonce')
  })

  it.only((''), function () {
    cy.get('#generateKeys').click()
    cy.contains('Wallet Generator').parent().get('#alias').type('rulox')
    cy.get('#generateWallet').click()
    cy.get('[data-tut="wallets"] > h2').parent().contains('rulox')
  })
})




