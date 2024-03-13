let temperatura = prompt("Ingrese la temperatura en grados Celsius");

let kelvin = parseFloat(temperatura) + 273.15;
let fahrenheit = parseFloat(temperatura) * (9 / 5) + 32;

document.write(`${temperatura} °C corresponden a ${kelvin} °K. `);

document.write(`${temperatura} °C corresponden a ${fahrenheit} °F`);
