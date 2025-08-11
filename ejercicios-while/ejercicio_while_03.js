// Ejercicio While 3: Validador de Contraseña
// Desarrolla un programa que use while para solicitar una contraseña hasta que cumpla con los criterios: 
// mínimo 8 caracteres, al menos una mayúscula, una minúscula y un número.

let contraseñaValida = false;

while (!contraseñaValida) {
  let contraseña = prompt("Ingresa una contraseña:");

  let tieneMayuscula = false;
  let tieneMinuscula = false;
  let tieneNumero = false;

  if (contraseña.length >= 8) {
    for (let i = 0; i < contraseña.length; i++) {
      let char = contraseña[i];

      if (char >= 'A' && char <= 'Z') {
        tieneMayuscula = true;
      } else if (char >= 'a' && char <= 'z') {
        tieneMinuscula = true;
      } else if (char >= '0' && char <= '9') {
        tieneNumero = true;
      }
    }
  }

  if (tieneMayuscula && tieneMinuscula && tieneNumero) {
    console.log("Contraseña válida.");
    contraseñaValida = true;
  } else {
    console.log("Contraseña inválida. Debe tener mínimo 8 caracteres, una mayúscula, una minúscula y un número.");
  }
}

