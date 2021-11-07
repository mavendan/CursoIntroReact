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

/**HOISTING: JAVASCRIPT MUEVE AUTOMATICAMENTE LA DECLARACION DE LAS FUNCIONES AL INICIO */

//Function declaration
// Funciona por el HOISTING
hablar();

function hablar(){
    console.log('Hablando');
}

//Function expression

// Va fallar porque se llama antes de declarar
gritar();

const gritar = function() {
    console.log('Gritar!!');
}


// reir();
const reir = () =>{
    console.log('Reir');
}
