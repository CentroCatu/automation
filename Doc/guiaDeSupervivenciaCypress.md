# Cypress - Guía de Supervivencia

# Instalar Cypress
[ver la página de instalación](https://github.com/CentroCatu/automation/blob/master/Doc/InstalarCypress.md )

# Iniciar Cypress

* abrir la terminal
* navegar hasta la carpeta
* Estando en la misma carpeta donde crearon el archivo `package.json` :
```
node_modules/.bin/cypress open
```

Puede tardar, pero se va a abrir Cypress

# Crear un grupo de tests

La primera vez que se inicia, Cypress crea una carpeta que se llama `integration` que adentro tiene otros archivos.

* crear un archivo adentro de la carpeta `integration` que termine con `.spec.js`. Por ejemplo `compra.spec.js`

# Estructura básica
 ``` javascript
/// <reference types="Cypress" />
describe('acciones de compra', function() {
    it('puede comprar una moto', function() {
        // ... acciones para comprar una moto
        // elegir primera moto
        // tocar el botón comprar
    })
    it('puede comprar una auto', function() {
        // ... acciones para comprar un auto
        // elegir el último auto
        // tocar el botón comprar
    })
  })
 ```

 La primera línea : `/// <reference types="Cypress" />` sirve para que el editor de código te pueda sugerir opciones mientras estás escribiendo el test.

 El texto que está después de `describe` es el nombre del grupo de tests

 El texto que está después de `it` es el nombre de la acción que se va a probar

Adentro de cada `it` ( o sea entre `{` y  `}`) van a ir las acciones de cada test

# Un test de ejemplo

``` javascript
/// <reference types="Cypress" />
describe('acciones de usuarios', function() {
    it('agrega un usuario', function() {
        cy.visit('https://nahual.github.io/qc-contactos/contactos.html')
        cy.contains('Nuevo Contacto').click()
        cy.get('#contact-name').type('Anselmo')
        cy.get('#contact-mail').type('anselmoaaaaaaaaaaaaaaaaaaaaaaaaa@gmail.com')
        cy.contains('Guardar').click()
        cy.get('.help-inline').should('have.text','El nombre del contacto no puede superar los 35 caracteres')
    })
  })
```
# El contenido de cada test
En un test se hacen mayormente tres tipos de acciones:
* seleccionar un elemento
* interactuar con ese elemento ( hacer click, escribir, seleccionar)
* comprobar que esté pasando lo deseado ( por ejemplo asegurarse que cuando toco el botón salir, la pantalla diga 'sesión cerrada')

