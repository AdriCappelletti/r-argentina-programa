/*
* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
* Escribir pruebas para esas funciones.
*
* Adicional: Escribir pruebas para las funciones de tareas anteriores.
*
* */


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