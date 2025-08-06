// Ejercicio For 4: Generador de Números Primos
// Utiliza ciclos for anidados para encontrar y mostrar todos los números primos entre 1 y 100. 
// Debe indicar cuántos números primos se encontraron.

let numeroPrimo = 0;

for (let i = 2; i <= 100; i++) {
  let primo = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }

  if (primo) {
    console.log(i);
    numeroPrimo++;
  }

  console.log("Los números primos encontrados son:", numeroPrimo);
}

