//ES9 Lanzada en junio del 2018

//Operador de reposo (Puede extraer las propiedades de un objecto que aun no se a contruido)

const obj = {
  name: "eleazar",
  age: 32,
  country: "MX"
};

let { name, ...all } = obj;

console.log(name, all);

// Utilizando las propiedades de propagación.

const obj = {
  name: "Oscar",
  age: 32
};

// composicion de dos object (elementos)
const obj1 = {
  ...obj,
  country: "MX"
};

console.log(obj1);

//Promise

const helloWord = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello word"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWord()
  .then(response => console.log(response))
  .catch(error => console.log(error))
  .finally(() => console.log("finalizo"));

// regex asia un grupo
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");

const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
