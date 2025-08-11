// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.

let frecuencia = {};
for (let i = 2; i <= 12; i++) {
    frecuencia[i] = 0;
}

for (let i = 0; i < 1000; i++) {
    let dado1 = Math.floor(Math.random() * 6) + 1;
    let dado2 = Math.floor(Math.random() * 6) + 1;
    let suma = dado1 + dado2;
    frecuencia[suma]++;
}

console.log("Frecuencia de cada suma:");
for (let suma = 2; suma <= 12; suma++) {
  console.log(`Suma ${suma}: ${frecuencia[suma]} veces`);
}

let sumaMasComun = 2;
for (let suma = 3; suma <= 12; suma++) {
  if (frecuencia[suma] > frecuencia[sumaMasComun]) {
    sumaMasComun = suma;
  }
}

console.log(`\nLa suma más común fue: ${sumaMasComun} con ${frecuencia[sumaMasComun]} apariciones`);