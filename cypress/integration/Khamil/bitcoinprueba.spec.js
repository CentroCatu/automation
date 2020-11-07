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
function crearTransaccion(giver, receiver, cantidad, clave) {
    cy.get('#toPublishGives').select(giver)
    cy.get('#toPublishReceives').select(receiver)
    cy.get('#toPublishAmount').type(cantidad)
    cy.get('#toPublishPass').type(clave)
    cy.get('#toPublishSign').click()
    cy.get('#toPublishPublish').click()
}
function comprobarTransaccion(giver, receiver, cantidad) {
    cy.get('[data-tut="notIncludedYet"]').find('[data-tut=""]').contains(receiver).contains(giver)
}
it.only('Realizar Transacción', function () {
    cy.visit('https://alpa84.github.io/coin/?do_not_log')
    cy.get('[aria-label="Close"] > svg').click()
    crearTransaccion('AlePan', 'SomeUser', 3, '65537,32738739318480270880847344601765335773851669760144296954546538700397943059327')
    crearTransaccion('AlePan', 'Athena', 3, '65537,32738739318480270880847344601765335773851669760144296954546538700397943059327')
    comprobarTransaccion('AlePan', 'SomeUser', 3)
    comprobarTransaccion('AlePan', 'Athena', 3)
})










