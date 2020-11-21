# Comprobaciones

## comprobar que un elemento tenga exactamente un texto:
```js
cy.get('#resultado').should('have.text', 'hola amigos')
```
## comprobar que un elemento tenga por lo menos un texto:
```js
cy.get('#resultado').should('contain', 'amigos')
```
## comprobar que un input o un campo de texto tenga un texto:

El texto que se puede editar se considera un `value` en vez de un `text`
```js
cy.get('#input').should('have.value', 'mi_email@mail.com')
```

## comprobar que un elemento tenga un atributo:
```js
cy.get('#resultado').should('have.attr', 'href', 'www.wiki.com')
```
## comprobar la dirección de la página donde estamos:
```js
cy.url.should('eq', 'www.wikipedia.com')
```

## comprobar que un checkbox esté chequeado:
```js
cy.get('#checkbox_1').should('be.checked')
```

## comprobar que un checkbox NO esté chequeado:
```js
cy.get('#checkbox_1').should('not.be.checked')
```

## comprobar que algo exista:
```js
cy.get('#aviso').should('exist')
```
## comprobar que algo NO exista:
```js
cy.get('#aviso').should('not.exist')
```

## comprobar que una opción de un select está seleccionada:
 ```js
cy.get('#provincia>option[value="santa_fe"]').should('be.checked')
```
Funcionaría para el siguiente html:
```html
<select id='provincia'>
    <option value="jujuy">Pcia de Jujuy</option>
    <option value="santa_fe">Pcia de Santa Fe</option>
    <option value="salta">Pcia de Salta</option>
</select>
```

dentro del `get` hay que seleccionar el selector y a eso agregarle `>option[value="la_opcion"]` donde `la_opcion`sea el `value` de esa opción, no el texto.

Hola amigos, les hablo desde el planeta Tierra.

Le va a tocar hacer el merge a Leon

