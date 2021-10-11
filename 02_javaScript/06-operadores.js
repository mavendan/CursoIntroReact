//1. Encadenamiento opcional

const estudiante = {
    nombre: 'Jose',
    apeelido: 'Bocanegra',
    cursos:{
        programacion: {
            introductorios: 'Scheme',
            avanzados: 'c++'
        },
        humanidades: {
            literatura: 'Analisis',
            historia: 'Roma',
        }
    }
 };
/*
 console.log('Propiedad curso introductorio programación: ', estudiante.cursos.programacion.introductorios)
 console.log('Propiedad curso introductorio humanidades: ', estudiante.cursos.humanidades.introductorios)
 console.log('curso introductorio matemática: ', estudiante.cursos.matematica.introductorios)
 */

 //2. Diferencia entre == y ===
 // == NO evalúa el tipo de dato
 console.log('Números iguales ? 20 == "20" ', 20 == "20");

 // === Evalúa el tipo de dato
 console.log('Números iguales ? 20 === "20" ', 20 === "20");

 console.log('Números iguales ? 20 === 20', 20 === 20);
