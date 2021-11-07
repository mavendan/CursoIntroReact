/**Ejemplo de una accion asincronica. Solamente se despliega datos en consola */
// console.log('ANTES');
// setTimeout(() => {
//     console.log('Leyendo información desde la base de datos');
// }, 2000);

// console.log('DESPUES');

/***Version mejorada  Se crea funcion y se muestra que log del usuario es undefined */
// console.log('ANTES');
// const usuario = obtenerUsuario(1);
// console.log(usuario);
// console.log('DESPUES');

// Crear function
function obtenerUsuario(id){
    setTimeout(() => {
        console.log('Leyendo información desde la base de datos');
        return {id: id, name: 'Mauricio'};
    }, 2000);
}

// Opciones para manejar las operaciones asincrónicas
///////////////////////////////////////////////////////////
// CALLBACKS
/**Con el callback ya logramos ver el resultado del usuario */
// console.log('ANTES');
//  obtenerUsuarioCallBack(1, function(usuario){
//      console.log('Usuario obtenido: ', usuario);
//  });
// console.log('DESPUES');

function obtenerUsuarioCallBack(id, callback){
    setTimeout(() => {
        console.log('Leyendo información desde la base de datos');
        callback({id: id, name: 'Mauricio'});
    }, 2000);
}
/* Version sin funciones anonimas */
// console.log('ANTES');
//  obtenerUsuarioCallBack(1, leerUsuario);

//  console.log('DESPUES');
 
// function leerUsuario(usuario){
//     console.log('Usuario obtenido: ', usuario);
// }
///////////////////////////////////////////////////////////
// PROMISES
const obtenerUsuarioPromise = (id) => new Promise((resolve, reject)=>{
    setTimeout(()=>{
        console.log('Leyendo información desde la base de datos');
        if(id == undefined ){
            reject(new Error('No se envió el ID del usuario')) // EL estado de la promesa pasa de "PENDING" a "REJECTED"
        }
        resolve({id: id, name: 'Mauricio'}); // El estado de la promesa pasa de "PENDING" a "RESOLVED" o "FULFILLED"
    },2000)
});

// console.log('PROMISE ANTES');
/*
obtenerUsuarioPromise(1)
    .then((result)=> console.log('Resultado de la promesa: ', result))
    .catch(error => console.log('Error del sistema: ', error))

obtenerUsuarioPromise()
    .then((result)=> console.log('Resultado de la promesa: ', result))
    .catch(error => console.log('Error del sistema: ', error)) */

// console.log('PROMISE DESPUES');

//EJEMPLO DE CORRER PROMESAS EN PARALELO

const myLongPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log('Operación asincrónica 1...');
        resolve(1)
    }, 3000);
});

const myQuickPromise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log('Operación asincrónica 2...');
        resolve(2)
    }, 1000);
});

/* Esta instruccio permite correr "casi" simultaneamente las promesas
Por eso se dice que se corren en paralelo, a pesar que es el mismo hilo de ejecucion.
No hay multithreads  */
/* Promise.all([myLongPromise, myQuickPromise])
.then(resultado => console.log('Resultados de las operaciones: ',resultado));
*/
// ASYNC/AWAIT

const myLongPromiseFunc = () => new Promise((resolve, reject) => {
    setTimeout(() =>{
        console.log('Operación asincrónica 1...');
        resolve(1)
    }, 3000);
});


// Aqui hacemos que el código asincrono se vea como sincrono, pero por abajo el JavaScript se convierte en un promise
async function longPromiseAsync(){
    const resultado1 = await myLongPromiseFunc(1);
    console.log('Resultado usando Async', resultado1);
}

longPromiseAsync();