var mundo=["🎄"," "," ","🚗"," "," "," "," ","🎄"," "," "," ","🎄"," "," "];
var posicion = 3;
console.log(mundo);
var personaje = "🧟";

function renderizar(pos){
    var nuevoMundo = mundo.map(function(celda, numCelda){
        if (pos == numCelda) {
            return personaje
        } else {
            return celda
        }
})
console.log(nuevoMundo); 
}


var flechaIzquierda = "ArrowLeft"
var flechaDerecha = "ArrowRight"


document.onkeydown = function(e) {
    console.clear()
    if(e.key== flechaIzquierda){
        posicion--
    }else if(e.key== flechaDerecha){
        posicion++
    }
    //console.log(e.key)
    console.log(posicion)
    renderizar(posicion)
    
}
