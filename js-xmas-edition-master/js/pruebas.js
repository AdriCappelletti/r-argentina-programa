function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );

  console.assert(validarNombre("123123") === 'El campo nombre solo acepta letras', 'No se puedo validar que el nombre solo tenga letras');

  console.assert(
    validarNombre("Adriano") === "",
    "No se pudo validar un nombre valido"
  ); //happy path
}



// INCLUIDO TAMBÍEN EN js/tarea-clase-7.js

// validarCiudad
function testValidarCiudad() {
  console.assert(
    validarCiudad("") === "Por favor selecciona una ciudad",
    "No se pudo validar que se haya especificado una ciudad"
  );

  console.assert(
    validarCiudad("Buenos Aires") === "",
    "No se pudo validar la ciudad con una ciudad valida"
  );
}



// validarDescripciónRegalo
function testValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "tu descripción debe tener al menos 1 caracter!",
    "no se pudo comprobar que la descripción tenga mas de 20 caracteres"
  );

  console.assert(
    validarDescripcionRegalo(
      "222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222"
    ) === "tu descripción no puede tener mas de 120 caracteres!",
    "no se pudo comprobar que la descripción tenga menos de 120 caracteres"
  );

  console.assert(
    validarDescripcionRegalo("RegaloRegaloRegaloRegalo") === "",
    "Validar descripción regalo fallo con una descripción valida"
  );

  console.assert(validarDescripcionRegalo('.,.,.,.') === 'El campo descripción solo puede tener numeros y letras', 
  'No se pudo comprobar que la descripción contenga solo letras y numeros')
}

testValidarDescripcionRegalo()
testValidarCiudad()
probarValidarNombre();