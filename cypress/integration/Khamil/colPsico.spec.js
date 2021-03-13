describe("Colegio de Psicologos", function () {
    it("Comprobar existencia de filtros", function () {
        cy.visit('http://buscador.colegiopsi.com');
        var lsfiltros=['Localidades','Obra Social','Nombre / apellido','Prácticas','Población','Matrícula habilitada','Atiende particular'];
        fnCheckFiltros(lsfiltros);
    })
    it("Comprobar carga de datos en tabla", function(){
        cy.get('[aria-labelledby="filtroLocalidadesLabel"]').click();
        cy.contains('Rosario - Zona Centro').click();
        cy.get('.makeStyles-constenedorMensajesGrilla-3').should('not.have.text','Para realizar una búsqueda, debe ingresar primero una localidad u obra social.');
    })
    it("Comprobar carga de nombres", function(){
        cy.get('#filtroNombre').click().type('carla');
        cy.get('[data-value="Carla Agostina Bruno"]');
    })
    it("comprobar pop-up informacion adicional", function(){
        cy.get('[data-field="infoAdicional"]').find('button').click().get('h2').contains('Información adicional')
    })
    it("comprobar boton restablecer", function(){
        cy.get('span').contains('Listo').click();
        cy.contains('Restablecer').click();
        cy.get('.makeStyles-constenedorMensajesGrilla-3').should('have.text','Para realizar una búsqueda debe ingresar primero una localidad u obra social.');
    })
})



function fnCheckFiltros (filtros) {
    for (var i=0;i<filtros.length;i++) {
    cy.get('label').contains(filtros[i]).should('be.visible');
    }
}