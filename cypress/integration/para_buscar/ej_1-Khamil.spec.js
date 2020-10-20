beforeEach(() => {
    cy.visit('https://alpa84.github.io/coin?do_not_log')
    cy.get('[aria-label="Close"] > svg').click()
})



describe('Buscar Elementos', function () {
    it.only('Buscar Nonce', function () {
        cy.contains('Block 1').closest('.card').contains("Nonce")
    })
   // it('Buscar mined', function () {
     //   cy.contains('Block 2').closest('.card.border-primary ').find('.table.inside.fixedTable').contains('mined')
    //})
    //it('Buscar Public adress number', function () {
    //    cy.get('.col-md-4').contains('SomeUser').closest('.card-body').find('.longString.userPublicAddress').click()
    //})
})


describe('Completar campo', function () {
    it('Completar amount', function () {
        cy.get('#toPublishAmount').type('46514684.1')
    })
    it('Completar key', function () {
        cy.get('#toPublishPass').type('letrasynumeros')
    })
})
