function crearWallet(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('[class="alert alert-danger"]').should('exist')
    cy.get('[class="alert alert-danger"]').should('not.exist')
    cy.get('#generateWallet').click()
}

function checkExist(nombre) {
    cy.get('#alias').clear()
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)  
    cy.get('[class="alert alert-danger"]').should('exist')
    
}

function checkNotExist(nombre) {
    cy.get('#alias').clear()
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('[class="alert alert-danger"]').should('not.exist')

}

function checkWallet(nombre){
   
    cy.get('[data-tut="wallets"]').contains(nombre)
}

describe('Billetera', function () {
    it('Crear Billetera', function() {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()
        checkNotExist('Maxi')
        checkExist('AlePan')
        
    })
})