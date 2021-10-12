// Función tradicional
function holaMundo(nombre){
    console.log('Hola, como te va: ', nombre)
}

// holaMundo('Mauricio');
// holaMundo();

// Función con parametros por defecto
function hola(nombre = 'Mundo'){
    console.log('Hola, como te va: ', nombre)
};

// hola();

// Function tipo flecha (Arrow function)
// Forma mas limpia para declarar una funcion
const saludar = (nombre) => console.log('Hola ', nombre);

// saludar('Aaron');