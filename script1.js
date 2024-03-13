let num1 = prompt("Ingrese un número mayor a 0");
let num2 = prompt("Ingrese otro número diferente y mayor a 0");

let suma = parseInt(num1) + parseInt(num2);
let resta = parseInt(num1) - parseInt(num2);
let divide = parseInt(num1) / parseInt(num2);
let multiplica = parseInt(num1) * parseInt(num2);
let modulo = parseInt(num1) % parseInt(num2);

document.write(`La suma de ${num1} y ${num2} es ${suma}. `);
document.write(`La resta de ${num1} y ${num2} es ${resta}. `);
document.write(`La división de ${num1} y ${num2} es ${divide}. `);
document.write(`La multiplicación de ${num1} y ${num2} es ${multiplica}. `);
document.write(`El módulo de ${num1} y ${num2} es ${modulo}.`);
