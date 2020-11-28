
# Selección de elementos

# Usando selectores css
cy.get(SELECTOR_CSS)

selecciona elementos usando un selector css

Ejemplo:
```js
cy.get('#resultado')
```

## seleccionar por id

`'#resultado'` selecciona el elemento con id `resultado`

## seleccionar por clase

`'.alerta'` selecciona todos los elementos con clase `alerta`

## seleccionar por tag

`'p'` , selecciona todos los elementos `< p >`

## seleccionar descendientes directos

`'p>.alerta'` selecciona los elementos con la clase `alerta` que sean descendientes directos de un elemento `p`

## seleccionar por posición

`'.alerta:nth-child(3)'` selecciona el tercer descendiente directo dede los elementos que tengan la clase `.alerta`

## seleccionar un elemento por un atributo

`'[href="www.wiki.com"]'` selecciona todos los elementos que tengan el atributo `href="www.wiki.com"`

(Doble comilla no es lo mismo que simple comilla)

# Seleccionar por texto

## contains

cy.contains(TEXTO)

selecciona todos los elementos que contienen `guardar`

Ejemplo:
```js
cy.contains('guardar')
```

## contains usando un selector css
cy.contains(SELECTOR_CSS, TEXTO)

Ejemplo:
```js
cy.contains('.alerta','guardar')
```
selecciona los elementos que contengan el texto `guardar` y tengan la clase `alerta`


Hay que cambiar la seleccion

Cambio numero 2 de la branch