// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.

let frase = "Anita lava la tina"; // Puedes cambiar esta frase para probar
let limpio = ""

for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toLowerCase();
    if ((letra >= 'a' && letra <= 'z') || (letra >= '0' && letra <= '9')) {
        limpio += letra;
    }
}

let invertido = "";
for (let i = limpio.length - 1; i >= 0; i--) {
  invertido += limpio[i];
}

if (limpio === invertido) {
    console.log(`La frase es un palíndromo.`);
}else {
    console.log(`La frase no es un palíndromo.`);
}