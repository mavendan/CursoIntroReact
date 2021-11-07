export class Usuario {
    constructor(name, apellido1, apellido2){
        this.name = name;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }

    registrar(){
        console.log(`Usuario: ${this.name} ${this.apellido1} ${this.apellido2} registrado.`)
    }
}

// Default export -> import name from '';
// Named export -> import { name } from '';