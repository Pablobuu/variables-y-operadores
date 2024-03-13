let days = prompt("Ingrese cantidad de días:");

let year = Math.floor(days / 365);
let week = Math.floor((days % 365) / 7);
let remainderDays = (days % 365) % 7;

document.write(
  `${days} días corresponden a ${year} años, ${week} semanas y ${remainderDays} días. `
);
