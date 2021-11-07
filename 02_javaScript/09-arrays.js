const frutas = ['Mango', 'Banano', 'Manzana'];
console.log('Un arreglo es un: ', typeof frutas);

// Funciones sobre arreglos

// Usando MAP
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map*/
const numeros = [1, 2, 3, 4];
const cuadrado = numeros.map(function(numero){
    return numero * numero;
});

console.log({cuadrado});

const alCuadrado = numeros.map(numero => numero * numero);

// console.log({alCuadrado});

//Agregando elementos en un arreglo
//End
frutas.push('Papaya');
console.log('push', frutas);

//Begining
frutas.unshift('Sandia');
console.log('unshift', frutas);

//Middle
frutas.splice(2, 0, 'Kiwi');
console.log('splice', frutas);

/** BORRANDO ELEMENTOS DE UN ARREGLO */
//End
frutas.pop();
console.log('pop', frutas);

//Begining
frutas.shift();
console.log('shift', frutas);

//Middle
frutas.splice(1, 1,);
console.log('splice', frutas);
