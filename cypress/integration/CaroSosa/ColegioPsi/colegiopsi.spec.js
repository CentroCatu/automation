describe('Colegio Psi', function () {
    it('', function() {
        cy.visit('http://buscador.colegiopsi.com/')
        cy.get('[aria-labelledby="filtroLocalidadesLabel"]').click()


        cy.get('[class="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiInputBase-input MuiInput-input"]').select('data-value="Acebal"')
        
        
    })
})