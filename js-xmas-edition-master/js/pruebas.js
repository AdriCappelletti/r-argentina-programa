// function probarValidarNombre() {
//   console.assert(
//       validarNombre('') === 'Este campo debe tener al menos 1 caracter',
//       'Validar nombre no validó que el nombre no sea vacío',
//   );

//   console.assert(
//       validarNombre(
//           '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
//       'Este campo debe tener menos de 50 caracteres',
//       'Validar nombre no validó que el nombre sea menor a 50 caracteres',
//   );
// }

// probarValidarNombre();

                                        // INCLUIDO TAMBÍEN EN js/tarea-clase-7.js
                                        
// validarCiudad 
function testValidarCiudad(){
console.assert(validarCiudad('') === 'Por favor selecciona una ciudad', 'No se pudo validar que se haya especificado una ciudad')
}

// validarDescripciónRegalo
function testValidarRegalo(){
console.assert( validarDescripcionRegalo('') === "tu descripción debe tener al menos 20 caracteres!", 
'no se pudo comprobar que la descripción tenga mas de 20 caracteres')

console.assert( validarDescripcionRegalo('222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222') === "tu descripción no puede tener mas de 120 caracteres!", 
'no se pudo comprobar que la descripción tenga menos de 120 caracteres')
}