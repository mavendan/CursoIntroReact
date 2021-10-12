/** La palabra clave this hace referencia a cosas distintas según el context
 * Dentro de un objeto, va hacer referencia al objeto en si mimo.
 * Fuera de un objeto, va hacer referencia al objeto window del browser
 ***/
const estudiante = {
    nombre: 'Mauricio',
    estudiar(){
        console.log(this);
    }
};

//En este escenario this hace referencia al objeto que lo contiene
//  estudiante.estudiar();


//This -> hace referencia al objeto window del browser
const estudiar = estudiante.estudiar;
// estudiar();

// En este ejemplo vamos a ver que sucede con this. El THIS 
// se restablece por considerarse la llamada al setTimeout una 
// llamada fuera del objeto
const estudianteUniversitario = {

    nombre: 'Mauricio',
    estudiar(){
        // const self = this;
        setTimeout(function(){
           // console.log(self);
           console.log(this);
        }, 1000)
    }
};

// Regresa el objeto window
// estudianteUniversitario.estudiar();

//Solucion para referenciar el objeto 
const estudianteColegial = {
    nombre: 'Mauricio',
    estudiar(){
        const that = this;
        setTimeout(function(){
           console.log(that);
        }, 1000)
    }
};
// estudianteColegial.estudiar();

//Con arrow functions no ocupamos hacer ese truco
//Con arrow function el THIS is not reset
const estudianteEscolar = {
    nombre: 'Mauricio',
    estudiar(){
        setTimeout(()=> console.log(this), 1000);
    }
};
// estudianteEscolar.estudiar();

//Otro ejemplo con this
const fabrica = {
   ubicacion: 'America Latina',
   productos: ['Carro', 'Moto', 'Helicoptero'],
   mostrar(){
       console.log(this.ubicacion);
   },
   mostrarFlecha: () =>{
    // console.log(this.ubicacion);
    setTimeout(()=> console.log(fabrica.ubicacion), 1000);
   }
};

// fabrica.mostrar();
fabrica.mostrarFlecha();