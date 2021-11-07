import { Usuario } from './usuario.js';

export class Gerente extends Usuario {
    constructor(nombre, apellido1, apellido2, departamento){
     super(nombre, apellido1, apellido2);
     this.departamento = departamento;
    }

    publicar(){
        console.log(`Publicar a : ${this.departamento}`);
    }
};