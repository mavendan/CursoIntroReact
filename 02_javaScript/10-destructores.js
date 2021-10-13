// Ejemplo usando el destructor para tomar propiedades del objeto
const estudiante = {
    nombre: 'Jose',
    apellido: 'Rodriguez',
    direccion: 'Costa Rica'
};

const {nombre, apellido, direccion} = estudiante;

// Leyendo valores de un arreglo
const frutas = ['Mango', 'Sandia', 'Melon'];
const [mango, sandia, melon] = frutas;

//Leyendo el primer elemento de un arreglo
const posiciones = [1, 2, 3, 4];
const [primero] = posiciones;

//Leyendo propiedades anidadas de un objeto
const estudiante1 = {
    nombre: 'Jose',
    apellido: 'Rodriguez',
    direccion: 'Costa Rica',
    cursos: {
        basicos: 'Ingles',
        avanzados: 'Introduccion a react'
    }
};

//Usando alias al destruir una propiedad
const { cursos: lecciones = ''} = estudiante1;
//Leyendo una propiedad anidada
const { cursos:  { basicos = 'Frances'} = {} } = estudiante1;
