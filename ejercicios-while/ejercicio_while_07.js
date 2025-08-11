// Ejercicio While 7: Contador de Dígitos
// Desarrolla un programa que use while para contar cuántos dígitos tiene un número entero ingresado por el usuario.

let numero = parseInt(prompt("Ingresa un número entero para contar sus dígitos:"));
if (isNaN(numero)) {
  console.log("Por favor ingresa un número entero válido.");
}

else {
  let contador = 0;
  let numeroAbsoluto = Math.abs(numero); // Considerar el valor absoluto para contar dígitos

  if (numeroAbsoluto === 0) {
    contador = 1; // El número 0 tiene un dígito
  } else {
    while (numeroAbsoluto > 0) {
      numeroAbsoluto = Math.floor(numeroAbsoluto / 10);
      contador++;
    }
  }

  console.log(`El número ${numero} tiene ${contador} dígito(s).`);
}   
