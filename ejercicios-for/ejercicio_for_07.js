// Ejercicio For 7: Matriz de Suma
// Usa ciclos for anidados para crear una matriz 5x5 donde cada elemento sea la suma de sus índices (fila + columna). 
// Muestra la matriz formateada.

let matriz = [];
for (let i = 0; i < 5; i++) {
    let fila = [];
    for (let j = 0; j < 5; j++) {
        fila.push(i + j);
    }
    matriz.push(fila);
}

for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join("\t"));
}