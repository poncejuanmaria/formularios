function campoRequerido(input) {
  console.log("perdi el foco y estoy en la funcion campoRequerido");
  //let input = document.getElementById('nombre');
  //if (input.value.length >0)
  if (input.value.trim() === "") {
    input.className = "form-control is-invalid";
  } else {
    input.className = "form-control is-valid";
  }
}

//tachiponce@gmail.com EXPRESIONES REGULARES RegExp
// !='' (es distinto de una cadena vacia) Es para saber si escribió algo o no.
function validarEmail(email) {
  let expresion = /\w+@\w+\.[a-z]{2,}$/;
  if (email.value.trim() != "" && expresion.test(email.value)) {
    email.className = "form-control is-valid";
  } else {
    email.className = "form-control is-invalid";
  }
}

function validarNumeros(numeros) {
  if (numeros.value.trim() != "" && !isNaN(numeros.value)) {
    numeros.className = "form-control is-valid";
  } else {
    numeros.className = "form-control is-invalid";
  }
}

//isNotANumber
//isNaN('hola') = el resultado va a ser true;
//isNaN(234234) = el resultado es false;
//! not (operador logico de no) !true es no es true.
//!true = false; !false= true;
//!isNaN y se ingresa un numero es TRUE
