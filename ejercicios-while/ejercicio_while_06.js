// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.

let numeros = [];
while (numeros.length < 15) {
  let numAleatorio = Math.floor(Math.random() * 100); // Números aleatorios entre 0 y 99
  if (!numeros.includes(numAleatorio)) {
    numeros.push(numAleatorio);
  }
}

console.log("Array de números: ", numeros); 

let elementoBuscado = parseInt(prompt("Ingresa un número para buscar en el array:"));
let posicion = -1;
let indice = 0;
while (indice < numeros.length) {
  if (numeros[indice] === elementoBuscado) {
    posicion = indice;
    break;
  }
  indice++;
}
if (posicion !== -1) {
  console.log(`El número ${elementoBuscado} se encontró en la posición: ${posicion}`);
} else {
  console.log(`El número ${elementoBuscado} no se encontró en el array.`);
}