/**1. EJEMPLO UNIR DOS STRINGS */
function concatenacionTradicional() {
    const nombre = 'Mauricio';
    const apellido = 'Avendano';
    
    const nombreCompleto = nombre + " " + apellido;
    console.log(nombreCompleto);
}

// concatenacionTradicional();

function concatenacionConTemplate() {
    const nombre = 'Aaron';
    const apellido = 'Bocanegra';
    
    const nombreCompleto = `${nombre} - ${apellido}`;
    console.log(nombreCompleto);
}

// concatenacionConTemplate();
