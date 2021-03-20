var posicionPersonajeFila = 1;
var posicionPersonajeColumna = 0;
var mundo2d = [
  [
    "🚗",
    " ",
    " ",
    " ",
    "🚗",
    " ",
    " ",
    " ",
    "🚗",
    " ",
    " ",
    " ",
    "🚗",
    " ",
    " ",
  ],
  [
    " ",
    " ",
    "🚗",
    " ",
    " ",
    " ",
    "🚗",
    " ",
    " ",
    " ",
    "🚗",
    " ",
    " ",
    " ",
    "🚗",
  ],
];
var personaje = "🐓";

document.onkeydown = function (e) {
  if (e.key == "ArrowUp") {
    posicionPersonajeFila = posicionPersonajeFila - 1;
  } else if (e.key == "ArrowDown") {
    posicionPersonajeFila = posicionPersonajeFila + 1;
  } else if (e.key == "ArrowLeft") {
    posicionPersonajeColumna = posicionPersonajeColumna - 1;
  } else if (e.key == "ArrowRight") {
    posicionPersonajeColumna = posicionPersonajeColumna + 1;
  }
  actualizarMundo();
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

function actualizarMundo() {
  console.clear();
  var nuevoMundoPrimera = mundo2d[0];
  var nuevoMundoSegunda = mundo2d[1];

  if (posicionPersonajeFila == 0) {
    nuevoMundoPrimera = mundo2d[0].map(function (celda, numCelda) {
      if (posicionPersonajeColumna == numCelda) {
        return personaje;
      } else {
        return celda;
      }
    });
  } else {
    var nuevoMundoSegunda = mundo2d[1].map(function (celda, numCelda) {
      if (posicionPersonajeColumna == numCelda) {
        return personaje;
      } else {
        return celda;
      }
    });
  }
  var nuevoMundo = [nuevoMundoPrimera, nuevoMundoSegunda];
  console.table(nuevoMundo);

  // if (mundo[posicionPersonaje] == "🚗") {
  //     console.log('PUM!')
  //     personaje = '👼'

  // }
}
