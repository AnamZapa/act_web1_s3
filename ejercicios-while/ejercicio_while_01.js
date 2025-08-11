// Ejercicio While 1: Contador de Números
// Crea un programa que use un ciclo while para contar del 1 al 50, 
// pero que solo muestre los números divisibles por 3 y 5.

let contador = 1;
while (contador <= 50) {
    if (contador % 3 === 0 && contador % 5 === 0) {
        console.log(contador);
    }   
    contador++;
}   
