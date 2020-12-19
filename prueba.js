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

    setInterval(function(){
        
        var nuevoMundo = mundo.map(function(celda, numCelda){
            if (posicion == numCelda) {
                return personaje
                
            } else {
                return celda
                
            }
        })
        if (mundo[posicion]=="🚗") {
            console.log('PUM!')
            personaje='👼'
        }
        console.log(nuevoMundo)

    },50)