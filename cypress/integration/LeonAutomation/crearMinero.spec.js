describe('Crear y verificar transaccion', function() {
    it('Crear y verificar transaccion', function() {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] >svg').click()
        asignarMinero('AlePan')
    })
})

function asignarMinero(nombre) {
    cy.get('#selectDirToAddMined').select(nombre)
    cy.get('#startMining').click()
}