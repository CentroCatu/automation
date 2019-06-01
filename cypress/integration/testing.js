describe('Funcionalidad quejas', function() {
    it('Burla al usuario', function() {
     tocar("http://127.0.0.1:8887/");
      
    })
  })


function tocar(pagina) {
  cy.visit(pagina)
  cy.contains('Quejas').click()
  cy.get('#input-quejas').type('sacate la rayita del pelo')
  cy.contains('Enviar').click()
  cy.get('#lugar-burla').should('contain', 'siciti li riyiti dil pili')
  cy.contains('Contador de Videos').click()
  for (let index = 0; index < 2; index++) {
    cy.contains('Agregar Uno').click()
  }
}