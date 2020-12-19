var mundo=["M"," "," ","S"," "," "," "," ","H"," "," "," ","Y"," "," "];
var posicion = 3;
console.log(mundo);
var personaje = "😜";
var nuevoMundo = mundo.map(function(celda, numCelda){
    if (posicion == numCelda) {
        return personaje
        
    } else {
        return celda
        
    }
})
console.log(nuevoMundo);

document.onkeydown = function (e) {
     
    if (e.key == "ArrowUp") {
        
        posicion = posicion + 1;

    } else {

        posicion = posicion - 1;

    }


    console.log(posicion);
    console.log(e.key)
  } ;
