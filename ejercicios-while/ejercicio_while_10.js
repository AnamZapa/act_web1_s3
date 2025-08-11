// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.

let suma = 0;
let contador = 0;
let notaMax = -Infinity;
let notaMin = Infinity;

let nota = parseFloat(prompt("Ingresa una calificación (-1 para terminar):"));

while (nota !== -1) {
  if (nota >= 0 && nota <= 100) { 
    suma += nota;
    contador++;

    if (nota > notaMax) notaMax = nota;
    if (nota < notaMin) notaMin = nota;
  } else {
    console.log("Ingresa un valor válido entre 0 y 100.");
  }

  nota = parseFloat(prompt("Ingresa otra calificación (-1 para terminar):"));
}

if (contador > 0) {
  let promedio = suma / contador;
  console.log(`Promedio: ${promedio.toFixed(2)}`);
  console.log(`Nota más alta: ${notaMax}`);
  console.log(`Nota más baja: ${notaMin}`);
} else {
  console.log("No se ingresaron calificaciones válidas.");
}
