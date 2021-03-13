# Mensajes de error

## Mensaje de error
```
CypressError: Typing into a date input with cy.type() requires a valid date with the format 'yyyy-MM-dd'. You passed: 02092001
Intención 
 Llenar un campo de fecha
 Solucion
Ingresar numeros con "yyyy-MM-dd" (año-mes-día)
```

## Mensaje de error: git pull
``` 
error: Unable to create 'C:/Users/Mauricio Ismael/Desktop/automation/.git/index.lock': File exists.

Another git process seems to be running in this repository, e.g.
an editor opened by 'git commit'. Please make sure all processes
are terminated then try again. If it still fails, a git process
may have crashed in this repository earlier:
remove the file manually to continue.
Updating a6efde2..c946f84

Solucion: Cerrar todas las terminales, sino funciona borrar el archivo. 
```
## Mensaje de error: CypressError: Timed out retrying: cy.click() failed because this element is detached from the DOM.
```
Cypress requires elements be attached in the DOM to interact with them.

The previous command that ran was:

  > cy.get()

This DOM element likely became detached somewhere between the previous and current command.

Common situations why this happens:
  - Your JS framework re-rendered asynchronously
  - Your app code reacted to an event firing and removed the element

You typically need to re-query for the element or add 'guards' which delay Cypress from running new commands.

* Soluciónes: 
1) Tratar de seleccionar de otra forma
2) Usar wait. Por ejemplo: cy.wait(5000)
```

