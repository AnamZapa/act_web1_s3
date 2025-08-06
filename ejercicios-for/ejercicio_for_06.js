// Ejercicio For 6: Calculadora de Potencias
// Implementa una función que use un ciclo for para calcular la potencia de un número sin usar Math.pow(). 
// Debe mostrar el proceso paso a paso.

function calcularPotencia(base, exponente) {
    let resultado = 1;
    let proceso = '';
    for (let i = 1; i <= exponente; i++) {
        resultado *= base;
        proceso += `${base}`;
        if (i < exponente) proceso += ' x ';
    }
    console.log(`${base} ^ ${exponente} = ${proceso} = ${resultado}`);
    return resultado;
}

// Ejemplo de uso:
calcularPotencia(2, 5); // 2 ^ 5 = 2 x 2 x 2 x 2 x 2 = 32

