function crearwallet(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('#generateWallet').click()
}

function checkwallet(nombre){
    //cy.get('.col-md-4').contains(nombre)
    cy.get('[data-tut="wallets"]').contains(nombre)
}

function transfer (giver, receiver, amount, privatekey) {
    cy.get('#toPublishGives').select(giver)
    cy.get('#toPublishReceives').select(receiver)
    cy.get('#toPublishAmount').type(amount)
    cy.get('#toPublishPass').type(privatekey)
    cy.get('#toPublishSign').click()
    cy.get('#toPublishPublish').click()
}
function  checktransfer(giver, receiver, numeroOrdenTransfer) {
        cy.get('[data-tut="notIncludedYet"]').find('[class="table inside fixedTable"]>tbody>tr:nth-child('+numeroOrdenTransfer+')').should('have.text', 'AlePan    SomeUser $: 3signature: 7920637614758232529373139557542613364308016725171319737412521317535107927227')
}


describe('Billetera', function () {
    it('Crear Billetera', function() {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()

        crearwallet('Maxi')
        checkwallet('Maxi')
        crearwallet('Ale')
        checkwallet('Ale')
        crearwallet('Diego')
        checkwallet('Diego')    
    })
    
    
    it.only('Transferir', function () {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()
        
        transfer('AlePan','SomeUser', 3, '65537,54334792063761474886297432039313727154330513618477202451099219546996291545379')
        transfer('AlePan', 'Athena', 3, '65537,54334792063761474886297432039313727154330513618477202451099219546996291545379')
        
        checktransfer('AlePan','SomeUser', 2)
        
        
        checktransfer('AlePan', 'Athena', 1)
       
    })
})