function crearbilletera(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').click().type(nombre)
    cy.get('#generateWallet').click()
}
function verificarBilletera(nombre) {
    cy.get('[data-tut="wallets"]').contains(nombre)
}
describe('Billeteras', function () {
    it('Generar Billeteras', function () {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()
        crearbilletera('Maxi')
        crearbilletera('Ale')
        crearbilletera('Diego')
        verificarBilletera('Maxi')
        verificarBilletera('Ale')
        verificarBilletera('Diego')
    })
})
function transaccion (giver,receiver,cantidad) {
    cy.get('#toPublishGives').select(giver)
    cy.get('#toPublishReceives').select(receiver)
    cy.get('#toPublishAmount').type(cantidad)
    var privateKey = cy.get('[data-tut="wallets"]').contains(giver).closest('.card-body')
    .find('[data-tut="creatorPrivateKey"]').find('.longString')
    console.log('alala', privateKey)
    cy.get('#toPublishPass').type(privateKey)
    cy.get('#toPublishSign').click()
    cy.get('#toPublishPublish').click()

}
    it.only('Realizar Transacción', function () {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()
       transaccion('AlePan', 'SomeUser', 3)

    })










