# Acciones Básicas

## Click
`.click()`
### ejemplo:
Para hacer click en un elemento con el id `top-banner`
```js
cy.get('#top-banner').click()
```


## Escribir
`.type(texto)`
### ejemplo:
Para escribir Hola en el elemento con el id `input`
```js
cy.get('#input').type('Hola')
```

## Checkear un checkbox o un radio button
`.check()`
### ejemplo:
```js
cy.get('[type="checkbox"]').check()
```

## Descheckear un checkbox o un radio button
`.uncheck()`
### ejemplo:
```js
cy.get('[type="checkbox"]').uncheck()
```

## Seleccionar un valor de un dropdown
`.select(opción)`
### ejemplo:
```js
cy.get('#selector_1').select('Santa Fe')
```

## Borrar el texto
`.clear()`
### ejemplo:
Para borrar el texto del elemento con id `input`
```js
cy.get('#input').clear()
```


