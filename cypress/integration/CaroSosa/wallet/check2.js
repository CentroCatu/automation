//Generar 'Public and Private key'
//Tipear 'UserNuevo' en alias
//Click en 'Generate Wallet'
//Chequear que aparezca un cartel que diga Wallet Generated. You will find it the Wallets section.
//Chequear que 10 segundos despues el cartel ya no esté

function crearWallet(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('#generateWallet').click()
}

function checkWallet{
   
    cy.get('[data-tut="wallets"]').contains(nombre)
}

describe('Billetera', function () {
    it('Crear Billetera', function() {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()
        crearWallet('UserNuevo')
        
    })
})