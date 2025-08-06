// Ejercicio For 5: Invertir Cadenas de Texto
// Crea un programa que use un ciclo for para invertir una cadena de texto carácter por carácter. 
// Muestra tanto la cadena original como la invertida.

let texto = "El jueves es festivo"
let invertir = ""

    for (let i = texto.length -1;i >=0; i-- ){
        invertir +=texto[i]
    }
    
console.log ("Texto original: ", texto)
console.log ("Texto invertido: ", invertir)