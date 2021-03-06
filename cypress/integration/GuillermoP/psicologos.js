describe( 'Test col-psicologos.herokuapp.com', ()=> {
    it( 'Entramos a la pagina', ()=> {
      cy.visit( 'http://buscador.colegiopsi.com' );
      cy.contains('Localidades');
      cy.get(':nth-child(1) > .MuiPaper-root > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click()
      cy.get('[data-value="Casilda"]').click()
      cy.get(':nth-child(2) > .MuiPaper-root > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click()
      cy.get('[data-value="ACA SALUD-(52)"]').click()
      cy.get('#filtroNombre').type('Leticia')
      cy.get(':nth-child(4) > .MuiPaper-root > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click()
      cy.get('.Mui-selected').click()
      cy.get(':nth-child(5) > .MuiPaper-root > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click()
      //cy.contains('Adultos').click()
      cy.get('.Mui-selected').click()
      cy.get(':nth-child(6) > .MuiPaper-root > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click()
      cy.get('[data-value="true"]').click()
      cy.get(':nth-child(7) > .MuiPaper-root > .MuiFormControl-root > .MuiInputBase-root > .MuiSelect-root').click()
      cy.get('[data-value="true"]').click()
      cy.get('.MuiDataGrid-viewport').contains('Leticia')
      cy.get('[data-value="Leticia Arriva"]').click()
      cy.get("#root > div:nth-child(2) > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-12.MuiGrid-grid-md-3 > div > div.leaflet-pane.leaflet-map-pane > div.leaflet-pane.leaflet-marker-pane > img:nth-child(2)").click()
      cy.get('.leaflet-popup-content-wrapper').contains('Casilda')
      cy.get(':nth-child(8) > .MuiPaper-root > .MuiButtonBase-root > .MuiButton-label').click()
      cy.get('.MuiGrid-grid-md-9 > .MuiPaper-root').contains('Para realizar una búsqueda debe ingresar primero una localidad u obra social.')
    } );
  } );

