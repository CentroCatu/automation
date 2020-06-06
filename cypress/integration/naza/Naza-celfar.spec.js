/// <reference types="Cypress" />

// https://nahual.github.io/qc-celfar/especificaciones.html
// https://docs.cypress.io/api/api/table-of-contents.html

describe('Visualización de elementos de Celfar', function() {
    it('Redirección a Celfar', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
    })
    it('Título de la página', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")

        // No hace falta ponerle visit cada vez que se prueva algo...
        // todos los it de este describe podrían ir sólo con el primer visit

        // contiene 'Conversor CelFar' en lugar de "CelFar"
        cy.title().should('eq', 'CelFar')
    })
    it('Título de la aplicación', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('h1').should('have.text', 'CelFar')

    })
    it('Visualización de enlace de Celcius', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('[href="http://es.wikipedia.org/wiki/Grado_Celsius"]').should('exist')

        // muy bien ese selector!
        // igualmente no prueba exactamente el requerimiento. Tendría que probar que donde dice 'Celcius'
        // sea un vinculo con esa dirección
        // ya vamos a ver cómo se puede chequear esto
    })
    it('Visualización de enlace de Fahrenheit', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('[href="http://es.wikipedia.org/wiki/Grado_Fahrenheit"]').should('exist')

        // idem arriba

    })
    it('visualización del botón "convertir!"', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.contains('convertir!').should('exist')
    })
    it('visualización del mensaje "Pendiente de cálculo..."', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#output').should('have.text', 'Pendiente de cálculo...')
    })
    it('Campo numérico - vacío inicialmente', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').should('have.text', "")
        // no lo dimos todavía, pero esta no es la forma correcta de chequear el texto de un INPUT
        // debería ser: cy.get('#input').should('have.value', "")
    })
    it('Campo numérico - Separador decimal', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('7.654321')
        cy.contains('convertir!').click()
        // falla porque cuenta los digitos luego de la coma
        cy.get('#output').should('not.contain', 'El valor ingresado es muy largo')

        // es recomendable chequear que las cosas pasen como deberían, en vez de chequear que no pasen
        // como no deberían
    })

  })

  describe('Calculo de conversión', function() {
      it('Conversión - Valores válidos presionando enter', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('7{enter}')
        cy.get('#output').should('have.text', '44.6')
      })
      it('Conversión - Valores válidos presionando "convertir!"', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('7')
        cy.contains('convertir!').click()
        cy.get('#output').should('have.text', '44.6')
      })
      it('Conversión - Con valor igual a -273', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('-273{enter}')
        cy.get('#output').should('have.text', '-459.4')
      })
      it('Conversión - Con valor por debajo de -273', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('-274{enter}')
        cy.get('#output').should('have.text', 'El valor ingresado está debajo del 0 absoluto')
      })
      it('Conversión - Con valor por encima de -273', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('-272{enter}')
        cy.get('#output').should('have.text', '-457.6')
      })
      it('Conversión - Con campo vacío', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('{enter}')
        cy.get('#output').should('have.text', "El valor ingresado no es un número (recuerde que los decimales deben expresarse con '.' y no con ',')")
      })

      it('Conversión - Con campo alfabético', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('abcdef{enter}')
        cy.get('#output').should('have.text', "El valor ingresado no es un número (recuerde que los decimales deben expresarse con '.' y no con ',')")
      })
      it('Conversión - Con numeros decimales', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('7.8{enter}')
        cy.get('#output').should('have.text', '46.04')
      })
      it('Campo numérico - Mensaje al superar los 6 dígitos presionando enter', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('1234567{enter}')
        cy.get('#output').should('have.text', 'El valor ingresado es muy largo')
    })
    it('Campo numérico - Mensaje al superar los 6 dígitos', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('1234567{enter}')
        cy.get('#output').should('have.text', 'El valor ingresado es muy largo')
    })
    it('Campo numérico - Valores decimales superando los 6 dígitos', function() {
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('7.123456{enter}')
        cy.get('#output').should('have.text', '44.8222208')
    })

  })

  describe('Modificación en el campo numérico', function(){
      it('Modificación de campo - Visualización de "Pendiente de cálculo..."', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('7{enter}')
        cy.get('#output').should('have.text', '44.6')
        cy.get('#input').type('6')
        cy.get('#output').should('have.text', 'Pendiente de cálculo...')
      })
      it('Borrar campo - visualización de "Pendiente de cálculo..."', function(){
        cy.visit("https://nahual.github.io/qc-celfar/")
        cy.get('#input').type('7{enter}')
        cy.get('#output').should('have.text', '44.6')
        cy.get('#input').clear()
        cy.get('#output').should('have.text', 'Pendiente de cálculo...')
      })
  })

