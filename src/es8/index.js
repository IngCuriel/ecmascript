//ES 8 lanzado en junio de 2017
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana"
};

const entries = Object.entries(data);
console.log(entries);
//conocer cuando elementos tiene nuestro arreglo
console.log(entries.length);

// Values arreglos de strign puros valores
const data = {
  frontend: "Oscar",
  backend: "Isabel",
  design: "Ana"
};

const value = Object.values(data);
console.log(value);
// conocer cantidad de elementos
console.log(value.length);
//Resultado -> [ 'Oscar', 'Isabel', 'Ana' ]

//agregar valores a un string
const string = "hello";
// 7 es la cantidad de digitos para el string y hi es lo que se la va agregar
console.log(string.padStart(7, "hi"));
//resultado -> hihello
console.log(string.padEnd(12, " hello"));
//resultado -> hello hello
console.log("food".padEnd(12, "  ------"));
//Resultado -> food  ------

//Principales Funcionalidades que se agrego ASYNC Y AWAIT

const helloWord = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello word"), 3000)
      : reject(new Error("Test Error"));
  });
};

const HelloAsync = async () => {
  const hello = await helloWord();
  console.log(hello);
};

HelloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWord();
    console.log(hello);
  } catch (error) {
    console.log(erro);
  }
};

anotherFunction();
