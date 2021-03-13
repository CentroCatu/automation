describe('Colegio Psi', function () {
    it('', function() {
        cy.visit('http://buscador.colegiopsi.com/')
        cy.get('[aria-labelledby="filtroLocalidadesLabel"]').click()

        cy.get('[data-value="Acebal"]').click()

        cy.wait(5000)

        cy.get('[data-field="infoAdicional"] > .MuiPaper-root > .MuiButtonBase-root').click()

        //cy.get('class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary" tabindex="0"')
        
        
        
    })
})