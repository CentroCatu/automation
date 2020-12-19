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
