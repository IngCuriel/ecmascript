//Lanzado junio 2019
// devolver una matriz con cualquier submatrix aplanadaj

//ARRAY PROTOTYPE FLAT
//aplanador de arraglos
// Aplanar matrices anidadas
let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array);
//resulto -> [ 1, 2, 3, [ 1, 2, 3, [ 1, 2, 3 ] ] ]
console.log(array.flat());
//resulto -> [ 1, 2, 3, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array.flat(2));
//resulto -> [ 1, 2, 3, 1, 2, 3, 1, 2, 3]

//multiplca el valor del elemento por 2
let array = [1, 2, 3, 4, 5];
console.log(array.flatMap(value => [value, value * 2]));

//Eliminar los espacion en blanco de un String con trimStart
let hello = "      hello world      ";
console.log(hello);
//Eliminar espacion al principio del texto
console.log(hello.trimStart());
//Eliminar espacios al final del texto
console.log(hello.trimEnd());

//Opcional
try {
} catch {
  error;
}

//Clave valor a un objeto
// conveertir Arreglo a objeto
//ENTRIES TO OBJECT
let entries = [
  ["name", "eleazar"],
  ["age", 26]
];
console.log(Object.fromEntries(entries));
//Result-> {name:'eleazar',age;26}

// EL OBJECTO DE TIPO SIMBOLO

let mySymbl = "My Symbol";
let symbol = Symbol(mySymbl);
console.log(symbol.description);
