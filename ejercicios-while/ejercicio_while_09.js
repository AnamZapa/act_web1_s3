// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.

let numero = Math.floor(Math.random() * 100) + 1; 
let intentos = 0;
let maxIntentos = 7;   
let adivinanza;

while (intentos < maxIntentos) {
        adivinanza = parseInt(prompt(`Intento ${intentos + 1} de ${maxIntentos}: Adivina el número entre 1 y 100:`));
        
    if (isNaN  (adivinanza) || adivinanza < 1 || adivinanza > 100) {
        console.log("Por favor ingresa un número válido entre 1 y 100.");
        continue; 
    }
        intentos++;
    if (adivinanza === numero) {
        console.log(`Correcto, adivinaste el número ${numero} en ${intentos} intento(s).`);
        break;
    }else if (adivinanza < numero) {   
        console.log("El número es mayor. Intenta de nuevo.");
    }
    else {
        console.log("El número es menor. Intenta de nuevo.");
    }
}
if (adivinanza !== numeroSecreto) {
  console.log(`Se acabaron los intentos. El número era ${numeroSecreto}.`);
}