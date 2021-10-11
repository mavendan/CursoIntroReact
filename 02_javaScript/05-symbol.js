//Symbol - identificador unico
const vehiculo = Symbol('coche');
console.log(typeof vehiculo)

const coche = Symbol('coche');

console.log(vehiculo == coche);

// Creando un objeto
const estudiante = {
    id: 1,
    nombre: 'Mauricio Avendano'
}
console.log(estudiante);

const id = Symbol('id');
estudiante[id] = 123;

console.log(estudiante);

//Leer el valor del symbol
console.log(estudiante[id]);