function transfer (giver, receiver, amount) {
    cy.get('#toPublishGives').select(giver)
    cy.get('#toPublishReceives').select(receiver)
    cy.get('#toPublishAmount').type(amount)
    cy.get('#toPublishPass').type('65537,54334792063761474886297432039313727154330513618477202451099219546996291545379')
    cy.get('#toPublishSign').click()
    cy.get('#toPublishPublish').click()
}
function  checktransfer(giver, receiver, amount) {
    cy.get('[data-tut="notIncludedYet"]').find('[class="table inside fixedTable"]').contains(giver).contains(receiver).contains(amount)
}
describe('Billetera', function () {
   it.only('Transferir', function () {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.get('[aria-label="Close"] > svg').click()
        
        transfer('AlePan','SomeUser', 3)
        checktransfer('AlePan','SomeUser', 3)
               
    })
})
///hola esto es una prueba