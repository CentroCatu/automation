function crearwallet(nombre) {
    cy.get('#generateKeys').click()
    cy.get('#alias').type(nombre)
    cy.get('#generateWallet').click()
}

function checkwallet(nombre){
    cy.get('.col-md-4').contains(nombre)
}

function transfer (giver, receiver, amount) {
    cy.get('#toPublishGives.custom-select').select('giver')
    cy.get('#toPublishReceives.custom-select').select('receiver')
    cy.get('#toPublishAmount.form-control').type('amount')
    cy.get('#toPublishPass').type('65537,54334792063761474886297432039313727154330513618477202451099219546996291545379')
    cy.get('#toPublishSign').click()
}
function  checktransfer() {
    cy.get('[data-tut="notIncludedYet"] > .card > .card-body > .table > tbody > tr > td > div').contains(giver, receiver, amount)
}


describe('Billetera', function () {
    it('Crear Billetera'), function() {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()

        crearwallet('Maxi')
        checkwallet('Maxi')
        crearwallet('Ale')
        checkwallet('Ale')
        crearwallet('Diego')
        checkwallet('Diego')    
    }
    
    
    it('Transferir', function (giver, receiver, amount) {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] > svg').click()
        
        transfer('AlePan','SomeUser', 3)
        checktransfer('AlePan','SomeUser', 3)
        
        transfer('AlePan', 'Athena', 3)
        checktransfer('AlePan', 'Athena', 3)
       
    })
})