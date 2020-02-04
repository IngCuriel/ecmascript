// Caracteristicas de EcmaScript 6 que salio en el año del 2015.

function newFunction(name, age, country) {
  var name = name || "Eleazar";
  var age = age || 32;
  var country = country || "MX";
  console.log(name, age, country);
}

// ES6 default params

function newFunction2(name = "oscar", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Eleazar", 2, "CO");
//

let hello = "Hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

// ES6 concatenación
// templateString
//comillas francesas
let epicPhrase2 = `${hello}  ${world}`; //propuesta de ES6
console.log(epicPhrase2);
//

let lorem =
  "Qui conseguatur. Commondi. IpSum vel duisyet minima ewrrwerwerwerwerwere \n" +
  "otra frase epica";

console.log(lorem);

//ES6 parrafos con salto de line-> multilinea
let lorem2 = `esta es una frese empreci
esta es otra frese epica`;
console.log(lorem2);
//

// ES6  Desestructuración
let person = {
  name: "eleazar",
  age: 32,
  country: "MX"
};

// sin ES&
console.log(person.name, person.country);

// ES6
let { name, age, country } = person;
console.log(name, age, country);

let array1 = ["Eleazar", "Oscar"];
let array2 = ["Curiel", " Monjaraz"];

let joinarray = ["todo", ...array1, ...array2];

console.log(joinarray);

// var tiene scope global y let con const no
{
  var global = "global";
}

{
  let globallet = "Global let";
}

console.log(global);
console.log(globallet); // error

// propiedad de objetos mejorados en EC6

let name = "oscar";
let age = 32;

// es ES5
obj = { name: name, age: age };

// es ES6
obj2 = { name, age };

console.log(obj2);

// Arrow Function(finciones anonimas) o funciones de tipo flecha

const names = [
  { name: "eleazar", age: 23 },
  { name: "curiel", age: 23 }
];

let listOfNames = names.map(function(item) {
  console.log(item);
});

//ES6
let listOfNames2 = names.map(item => console.log(item));

const listOfNameConst = (name, age) => {};

//ES6 esta funcion recibe un numero y devuelve la multiplicaion
const square = num => num * num;

console.log(square(4));

// Promesa ES6
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey!");
    } else {
      reject("ups!");
    }
  });
};

// LLamada a un Promesa
helloPromise()
  .then(response => console.log(response))
  .then(() => console.log("hola"))
  .catch(error => console.log(error));

//Clases; modulos y generadores ES6
class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  suma(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.suma(4, 5));

// trabajar con modulos

import { hello } from "./modulo";
hello();

// trabajar con generedores
function* helloWorld() {
  if (true) {
    yield "hello,";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

//
