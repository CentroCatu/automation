describe('', function () {
    it('', function () {
        cy.visit('http://127.0.0.1:8887')
        cy.contains('Links').parent().contains('link 1')
        cy.get(':nth-child(2) > :nth-child(2) > a').click()
        cy.contains('Salchicha').parent().parent().parent().contains('Puntaje')
        cy.get('h2').click()
    })
})