// Ejercicio While 2: Suma de Números Pares
// Implementa un ciclo while que sume todos los números pares entre 1 y 100. 
// Muestra el resultado final y cuántos números se sumaron.

let suma = 0;
let contador = 1;
let cantidadPares = 0;

while (contador <= 100) {
    if (contador % 2 === 0) {
        suma += contador;
        cantidadPares++;
    }
    contador++;
}
console.log(`La suma de los números pares entre 1 y 100 es: ${suma}`);
console.log(`Se sumaron ${cantidadPares} números pares.`); 

