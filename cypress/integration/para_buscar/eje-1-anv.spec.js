/// <reference types="Cypress" />
describe('Buscar', function () {
    it('Ejercicio 1', function () { 

        cy.visit("https://alpa84.github.io/coin/")
        cy.get('[aria-label="Close"] > svg').click()
        //cy.contains("Block 1").closest(".card").contains("Nonce")
        //cy.contains("SomeUser").parent(".col-md-4").contains("Public address")
        cy.contains('Wallets').parent().contains('SomeUser').parent().contains('Public address')
    })

    })
