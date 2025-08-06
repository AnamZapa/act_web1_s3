// Ejercicio For 8: Contador de Caracteres
// Desarrolla un programa que use un ciclo for para contar la frecuencia de cada carácter en una cadena de texto. 
// Muestra los resultados ordenados alfabéticamente.

let texto = "El jueves es festivo";
let frecuencia = {};
for (let i = 0; i < texto.length; i++) {
    let char = texto[i].toLowerCase();
    if (char >= 'a' && char <= 'z') { // Considera solo letras
        frecuencia[char] = (frecuencia[char] || 0) + 1;
    }
}
let caracteres = Object.keys(frecuencia).sort();
for (let i = 0; i < caracteres.length; i++) {
    let char = caracteres[i];
    console.log(`${char}: ${frecuencia[char]}`);
}