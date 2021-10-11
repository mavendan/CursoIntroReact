// Definición de variables: var, let, const
// var: scope de función
// const: scope del bloque donde se define
// let: scope del bloque donde se define

// Usar CONST a menos que ocupemos reasignar variables

/*1. EJEMPLO CON VAR: SCROPE DE FUNCION */
function saludar() {
    var miNombre = "Mauricio";
    console.log('Hola: ', miNombre);
}


// saludar();

// Muestra error pues miNombre se definió dentro de la funcion saludar
// console.log('Saludaste a ', miNombre);

/* 2. EJEMPLO CON LET */
function contar(){
    // Inicio del bloque
    for(let index=0; index<5; index++){
        console.log(index);
    }
    //Aqui el invocar index muestra error
     // console.log(index);
}

// contar();

/*3. EJEMPLO CON CONST */
const valorDeLectura = 1;
//Muestra error pues const es unicamente para constantes
// valorDeLectura = 5;
