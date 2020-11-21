describe("", function () {
    it("", function () {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()
        cy.get("#generateKeys").click()
        cy.get("#alias").type('Athena')
        cy.get(['data-tut="alias"']).get(".alert").contains('That alias already exists')
        cy.get("#alias").type('agadsgasdg')
        cy.get(['data-tut="alias"']).get(".alert").should('not.exist', 'That alias already exists')
    })
    it.only("", function () {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()
        cy.get("#generateKeys").click()
        cy.get("#alias").type('UserNuevo')
        cy.get('#generateWallet').click()
        cy.get(['data-tut="alias"']).get('[class="alert alert-success"]').contains('Wallet Generated. ')
        cy.wait(11000).get(['data-tut="alias"']).get('[class="alert alert-success"]').should('not.exist', 'Wallet Generated. ')
    })
    it('', function () {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()
        cy.get("#generateKeys").click()
        cy.get("#alias").type('AlePan')
        cy.get('[data-tut="wallets"]').find('[data-tut="userWallet"]').contains('AlePan').closest('[class="panel-body"]').find(':nth-child(2)').contains('Athena')
        cy.get('[data-tut="wallets"]').find('[data-tut="userWallet"]').contains('AlePan').closest('[data-tut="userWallet"]').next().contains('Athena')
    })
})

