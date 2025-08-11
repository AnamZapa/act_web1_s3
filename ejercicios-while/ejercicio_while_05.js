// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.

let numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));

if (isNaN(numero) || numero < 0) {
  console.log("Por favor ingresa un número entero no negativo.");
} else {
  let factorial = 1;
  let contador = 1;

  while (contador <= numero) {
    factorial *= contador;
    contador++;
  }

  console.log(`El factorial de ${numero} es: ${factorial}`);
}
