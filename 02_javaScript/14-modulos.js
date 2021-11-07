// Aqui se ocupa la extension .js pues no estamos trabajando con un framework
import { Gerente } from "./modulos/gerente.js";

const gerente = new Gerente('Juan', 'Rodriguez', 'Ramirez', 'Mercadeo');
gerente.registrar();
gerente.publicar();