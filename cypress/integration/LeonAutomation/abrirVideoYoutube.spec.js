describe('Abrir video', function() {
    it('Abrir video', function() {
        cy.visit('https://www.youtube.com/')
        buscarCanal('Taberna de Rol') 
    })
})

function buscarCanal(nombre) {
    cy.get('#search-input > #search').type(nombre)
    cy.get('#search-icon-legacy').click()
    cy.get('#main-link > #info').contains('La Taberna De Rol').click()
}