let num1 = prompt("Ingrese un número: ");
let num2 = prompt("Ingrese un número: ");
let num3 = prompt("Ingrese un número: ");
let num4 = prompt("Ingrese un número: ");
let num5 = prompt("Ingrese un número: ");

let suma =
  parseInt(num1) +
  parseInt(num2) +
  parseInt(num3) +
  parseInt(num4) +
  parseInt(num5);
let promedio = parseInt(suma) / 5;

document.write(
  `La suma de todos los números es ${suma}, y el promedio es ${promedio} `
);

console.log(suma);
console.log(promedio);
