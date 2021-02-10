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
