// string
const nombre = "Jose";

// Number
const numero = 14;
const decimal = 2.4;

//Boolean
const esTrabajador = true;
const esAdulto = false;

// Ver los tipos de datos
console.log('Tipos de datos básicos: ', typeof nombre, 
    typeof numero, 
    typeof decimal, 
    typeof esTrabajador);


// Objects (Key - value)
const car = {
   doors: 4,
   builder: 'Ford',
   accelerate: function() {
        console.log('Moving fast')
    }
};

console.log('An object is an:', typeof car)
// car.accelerate();

//Array - Los arreglos son objetos
const frutas = ['Mango', 'Banano', 'Manzana'];
console.log('Un arreglo es un: ', typeof frutas);


//NUll es un Objeto vacio
const vacio = null;
console.log('NULL es un: ', typeof vacio);

//undefined no es nada
const nada = undefined;
console.log('undefined es: ', typeof nada);


//Symbol - identificador unico
const vehiculo = Symbol('coche');
console.log(typeof vehiculo)
