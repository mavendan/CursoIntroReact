/**
 * El concepto de clase, me permite tener una plantilla
 * para crear el objetos con las mismas propiedades,
 * si tener que volver a definirlo
 * 
 */
class Transporte {
    constructor(nombre){
        this.nombre = nombre;
    }
    acelerar() {
        console.log('Acelerando...', this.nombre)
    }

    detener() {
      console.log('Detener...', this.nombre)
  }
};

/**Podemos heredar de una clase. Ocupamos invocar el constructor SUPER para pasar las propiedades
 * que ocupe la clase padre, de no hacerse, se genera un error
 */
class Vehiculo extends Transporte {
   constructor(nombre, fabricante) {
     super(nombre);
     this.fabricante = fabricante;
   }
   
   abrirPuertas() {
    console.log('Abrir las puertas de su ', this.nombre);
   }
};

const transporte = new Vehiculo('Corolla', 'Toyota');
transporte.acelerar();
transporte.abrirPuertas();

