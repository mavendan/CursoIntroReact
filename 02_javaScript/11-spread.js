//Usando el operador spread sobre colecciones
const peliculas = ['Avengers', 'Black Widow', 'IronMan'];
// console.log(...peliculas);


const mostrarPeliculas = (primera, segunda) => {
    console.log(`Las dos mejores peliculas son :
            1. ${primera}
            2. ${segunda}`);
};
//Pasando parametros
// mostrarPeliculas(peliculas);
// mostrarPeliculas(...peliculas);

//Usando el spread para copiar un arreglo
const copia = peliculas;
console.log(copia);
peliculas[0] = 'Hulk';
console.log(copia);

const clone = [...peliculas];
peliculas[1] = 'SpidermanII';
console.log(clone);
console.log(copia);


//Usando el operador spread sobre objetos
const estudiante = {
    nombre: 'Jose',
    apellido: 'Rodriguez'
};

const nuevoEstudiante = {...estudiante, edad: 19};
console.log(nuevoEstudiante);

//Usando el REST

const mostrandoPeliculas = (primera, segunda, ...demas) => {
    console.log(`Mostrando hoy :
            1. ${primera}
            2. ${segunda}
            El resto ${demas}
            `);
};
mostrandoPeliculas('Joker', 'Vice', 'Ford vs Ferrari', 'Hoffa');;