var mundo=["🚗"," "," "," "," "," "," "," ","🚗"," "," "," ","🚗","🚗"," "];
var posicion = 3;
console.log(mundo);
var personaje = "😜";

document.onkeydown = function (e) {
     
    if (e.key == "ArrowUp") {
        
        posicion = posicion + 1;

    } else {

        posicion = posicion - 1;

    }

  } ;

    var nuevoMundo = [];
    setInterval(function(){
        
        var nuevoNuevoMundo = mundo.map(function(celda, numCelda){
            if (posicion == numCelda) {
                return personaje
                
            } else {
                return celda
                
            }
        })

        if (JSON.stringify(nuevoMundo) !== JSON.stringify(nuevoNuevoMundo)) {
            console.clear(); 
            
            console.log(nuevoNuevoMundo)
            nuevoMundo = nuevoNuevoMundo;

            if (mundo[posicion]=="🚗") {
                console.log('PUM!')
                personaje='👼'
            } else {
                personaje='😜'
            }
        }

    },50)