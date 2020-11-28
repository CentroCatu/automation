/// <reference types="Cypress" />
// node_modules/.bin/cypress open

describe('Para buscar', function() {

    beforeEach(() => {        
        cy.visit('https://alpa84.github.io/coin/')
        cy.get("[aria-label='Close']").click()    
    })

    it('Seleccionar el Nonce de el bloque 1', function() {        
        //cy.contains('Nonce').closest('.card-header').find().eq(1)
        //cy.contains('Block 1').closest('.card-header').parent().contains('Nonce').click()
        cy.contains('Block 1').closest('.border-primary ').contains('Nonce').click()
    })

    it.only('Seleccionar Public Acces de SomeUser', function() {        
        cy.contains('Wallets').parent().contains('SomeUser').parent().contains('Public address')
    })
})