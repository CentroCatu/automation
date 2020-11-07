describe('Crear billetera', function() {
    it('Crear billetera', function() {
        cy.visit('https://alpa84.github.io/coin/?do_not_log')
        cy.get('[aria-label="Close"] >svg').click()
        crearBilletera('Maxi')
        crearBilletera('Ale')
        crearBilletera('Diego')
        verificarBilletera('Maxi')
        verificarBilletera('Ale')
        verificarBilletera('Diego')
    })
})

function crearBilletera(nombre) {
    cy.get('#generateKeys').click()

}

function verificarBilletera(nombre) {
    cy.get('[data-tut="wallets"]').contains(nombre)  
}