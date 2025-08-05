// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.

let numeros = [];
for (let i = 0; i < 20; i++){
    numeros.push(Math.floor(Math.random())*100)
}

let mayor = 0
let menor = 0
let total = 0
let promedio = 0
let pares = 0
let impares = 0