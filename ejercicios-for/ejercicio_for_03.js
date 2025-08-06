// Ejercicio For 3: Análisis de Array de Números
// Dado un array de 20 números aleatorios, usa un ciclo for para encontrar: 
// el número mayor, el menor, la suma total, el promedio, y cuántos números son pares e impares.

let numeros = [];
for (let i = 0; i < 20; i++) {
  numeros.push(Math.floor(Math.random() * 100) + 1);
}
 
console.log("Array de números: ", numeros);

let mayor = numeros[0]
let menor = numeros[0]
let total = 0
let promedio = 0
let pares = 0
let impares = 0

for (let i = 0; i < numeros.length; i++){
    let num = numeros [i]

        if (num > mayor) mayor = num;
        if (num < menor) menor = num;
        total += num;
        if (num % 2 === 0) {
            pares++;
        } else {
            impares++;
        }    
}
promedio = total / numeros.length;

console.log("Mayor:", mayor);
console.log("Menor:", menor);
console.log("Total:", total);
console.log("Promedio:", promedio);
console.log("Pares:", pares);
console.log("Impares:", impares);
    