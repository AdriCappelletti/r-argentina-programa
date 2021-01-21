

// Formas de agarrar un input

// const nombre = $form.nombre;
// nombre = document.querySelector('[name=nombre]').value
// nombre = document.querySelector('#nombre')

// const nombre = $form.nombre.value;
// const ciudad = $form.ciudad.value;
// const comportamiento = $form.comportamiento.value;
// const descripcionRegalo = $form["descripcion-regalo"].value;

// console.log(nombre);
// console.log(ciudad);
// console.log(comportamiento);
// console.log(descripcionRegalo);

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length > 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!/^[a-z]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras";
  }

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Por favor selecciona una ciudad";
  }

  return "";
}

function validarDescripcionRegalo(descripcion) {
  if (descripcion.length === 0) {
    return "tu descripción debe tener al menos 1 caracter!";
  } else if (descripcion.length >= 120) {
    return "tu descripción no puede tener mas de 120 caracteres!";
  } else if (!/^[a-z0-9]+$/i.test(descripcion)) {
    return "El campo descripción solo puede tener numeros y letras";
  }

  return "";
}

function validarForm(event){
  
  const nombre = $form.nombre.value
  const ciudad = $form.ciudad.value
  const descripcion = $form['descripcion-regalo'].value
  
  const errorNombre = validarNombre(nombre)
  const errorCiudad = validarCiudad(ciudad)
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcion)

  const errores = {
  nombre: errorNombre,
  ciudad: errorCiudad,
  'descripcion-regalo': errorDescripcionRegalo
};

manejarErrores(errores)

event.preventDefault()
}

function manejarErrores(errores){

const keys = Object.keys(errores)

keys.forEach(function(key){
  const error = errores[key]
  if (error) {
    $form[key].className = 'error'
  } else{
    $form[key].className = ''
  }

})


  
}
  // errorNombre = errores.nombre
  // errorCiudad = errores.ciudad
  // errorDescripcion = errores.errorDescripcionRegalo

  // if (errorNombre) {
  //   $form.nombre.className = 'error'
  // } else{
  //   $form.nombre.className = ''
  // }


  // if (errorCiudad) {
  //   $form.ciudad.className = 'error'
  // } else{
  //   $form.ciudad.className = ''
  // }


  // if (errorDescripcion) {
  //   $form['descripcion-regalo'].className = "error"
  // } else{
  //   $form['descripcion-regalo'].className = ''
  // }
// }

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarForm;