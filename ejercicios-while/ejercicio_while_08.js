// Ejercicio While 8: Secuencia de Fibonacci
// Implementa un generador de la secuencia de Fibonacci usando while que muestre los primeros 20 números de la serie.

let fibonacci = [0, 1];
let contador = 2;   
while (contador < 20) {
    let siguienteNumero = fibonacci[contador - 1] + fibonacci[contador - 2];
    fibonacci.push(siguienteNumero);
    contador++;
    }   
console.log("Los primeros 20 números de la secuencia de Fibonacci son:");
console.log(fibonacci); 
