/** Este es un objeto... si ocupo crear otro con las mismas propiedades
 * necesito a volver a copiar
 */
const carro = {
    puertas: 4,
    fabricante: 'Ford',
    acelerar() {
         console.log('Acelerando...')
     }
 };

/**
 * El concepto de clase, me permite tener una plantilla
 * para crear el objetos con las mismas propiedades,
 * si tener que volver a definirlo
 * 
 */
class Automovil {

    #propiedadPrivate = 'Es privada';
    propiedadPublica = 'Es propiedad publica';

    constructor(fabricante, puertas){
        this.fabricante = fabricante;
        this.puertas = puertas;
    }

    acelerar() {
        console.log('Acelerando...')
    }
    mostrarPropiedades(){
        console.log('Mis propiedades publicas', this.propiedadPublica);
        console.log('Mis propiedades privadas', this.#propiedadPrivate);
    }
};

// Ahora si quiere crear un automovil, solo tengo que inicializarlo
const corolla = new Automovil('Toyota', 4);
const fiesta = new Automovil('Ford', 4);

// console.log(`Tenemos autos de los fabricantes: ${corolla.fabricante}, ${fiesta.fabricante}`);

/**
 * Podria crear un ejemplo de usar metodos estaticos
 * 
 * When a static or prototype method is called without a value for this, such as 
 * by assigning the method to a variable and then calling it, the this value will be undefined inside the method. 
 * This behavior will be the same even if the "use strict" directive isn't present, 
 * because code within the class body's syntactic boundary is always executed in strict mode
 */

// Creando metodos estaticos
 class Animal {
    speak() {
      return this;
    }
    static eat() {
      return this;
    }
  }

 const obj = new Animal();
obj.speak(); // the Animal object
const speak = obj.speak;
// console.log('SPEAK', speak()); // undefined

// Animal.eat() // class Animal
// console.log('Animal', Animal.eat()) // class Animal
// const eat = Animal.eat;
// console.log('EAT', eat()); // undefined

//Ejemplo de propiedades privadas y publicas
class Inversion {

    #propiedadPrivate = 'Es privada';
    propiedadPublica = 'Es propiedad publica';
    _propiedadProtegida = 'Es una propiedad protegida';

    constructor(nombre){
        this.nombre = nombre;
    }
    mostrarPropiedades(){
        console.log('Mis propiedades publicas', this.propiedadPublica);
        console.log('Mis propiedades privadas', this.#propiedadPrivate);
        console.log('Mis propiedades protegidas', this._propiedadProtegida);
    }
};

// const miInversion = new Inversion('Valle del Sol');
// miInversion.mostrarPropiedades();

class FondoDeInversion extends Inversion {
    constructor(nombre){
        super(nombre);
    }
}

const fondo = new FondoDeInversion('El Invesionista');
fondo.mostrarPropiedades();
fondo._propiedadProtegida;