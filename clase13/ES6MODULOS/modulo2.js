//import { sumar, restar } from "./modulo1.js";
// import * as operacion from './modulo1.js'

console.log(sumar(1, 2));
console.log(restar(10, 2));

operacion.sumar(5,4)


import Dado from "./dado.js";

//import { Dado } from "./dado.js"; NOOOOOOO PORQUE ES UN UNICO VALOOOR

const dado1 = new Dado();
console.log(dado1.valor);
dado1.tirar();
console.log(dado1.valor);
