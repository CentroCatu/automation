var posicionPersonajeFila = 1;
var posicionPersonajeColumna = 0;
var mundo2d = [
    ["🚗", " ", " ", " ", "🚗", " ", " ", " ", "🚗", " ", " ", " ", "🚗", " ", " "], 
    [" ", " ", "🚗", " ", " ", " ", "🚗", " ", " ", " ", "🚗", " ", " ", " ", "🚗"]
]
var personaje = "🐓";

document.onkeydown = function (e) {

    if (e.key == "ArrowUp") {

        posicionPersonaje = posicionPersonaje + 1;

    } else {

        posicionPersonaje = posicionPersonaje - 1;
    
    }
    actualizarMundo()
};



var nuevoMundo = [];
// //setInterval(function () {



//     var nuevoMundo = mundo.map(function (celda, numCelda) {
//         if (posicionPersonaje == numCelda) {
//             return personaje

//         } else {
//             return celda

//         }
//     })


//     //console.log(nuevoMundo)
//     console.clear()
//     console.table(mundo2d)

//     if (mundo[posicionPersonaje] == "🚗") {
//         console.log('PUM!')
//         personaje = '👼'

//     }


// }, 50)

function actualizarMundo(){
    console.clear()
    if (posicionPersonajeColumna == 0){
        var nuevoMundo = mundo2d[0].map(function (celda, numCelda) {
            if (posicionPersonajeFila == numCelda) {
                return personaje
    
            } else {
                return celda
    
            }
        })

    } else{
        var nuevoMundo = mundo2d[1].map(function (celda, numCelda) {
            if (posicionPersonajeFila == numCelda) {
                return personaje
    
            } else {
                return celda
    
            }
        })

    }
    var nuevoMundo = mundo.map(function (celda, numCelda) {
        if (posicionPersonaje == numCelda) {
            return personaje

        } else {
            return celda

        }
    })

    console.table(mundo2d)

    if (mundo[posicionPersonaje] == "🚗") {
        console.log('PUM!')
        personaje = '👼'

    }

}