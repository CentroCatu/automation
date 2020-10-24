closest: 
Sube hasta encontrar el elemento adentro de los parentesis, lleva como parametro el selector del elemento al que queremos subir.
Ejemplo:
cy.get("#perro").closest(".cosaRara")


find:
Seleciona el elemento que le pasamos como parametro dentro de lo que ya habiamos seleccionado.
Ejemplo:
cy.get("#perro").closest(".cosaRara").find(".cosaMasRara");


parent: 
Sube un elemento.
No lleva ningun parametro.
Ejemplo:
cy.get("#perro").parent();


