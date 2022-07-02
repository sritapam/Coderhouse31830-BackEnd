// export function sumar(x, y){
//   return x + y
// }

// export function restar(x, y){
//   return x - y
// }

function sumar(x, y) {
  return x + y;
}

function restar(x, y) {
  return x - y;
}

export { sumar, restar };

// let obj = {
//   nombre: 'pamela',
//   apellido: 'pereyra'
// }

// console.log(obj)

// El módulo consta de 2 funciones exportadas, podría haber dentro del módulo otras funciones, clases, variables etc. sin la palabra export que solo se pueden acceder dentro del módulo.

// Para consumir un módulo desde otro módulo o una página HTML debemos utilizar la palabra clave import:
