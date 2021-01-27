// Test Validación Integrantes

function probarValidarIntegrantes(){

console.assert(validarCantidadIntegrantes(0) === 'Debe ingresar un numero mayor a 0', 
'ValidarCantidadIntegrantes no valido que la cantidad de integrantes sea mayor a 0') 

console.assert(validarCantidadIntegrantes("") === 'Debe ingresar al menos un integrante', 
'ValidarCantidadIntegrantes no valido que el input no este vacio' )

console.assert(validarCantidadIntegrantes(1) === '', 'ValidarCantidadIntegrantes no pudo validar valor valido' )
}


//Test Validación Edades Integrantes

function probarValidarEdadesIntegrantes(){
    console.assert(validarEdadesIntegrantes([0,0,-1,0]) === 'Las edades deben ser valores positivos', 
    'No se valido que las edades de los inegrantes sean mayores a 0')

    console.assert(validarEdadesIntegrantes([1,1,1,1]) === '',
     'No se pudo validar las edades de los integrantes con edades validas')
}

probarValidarIntegrantes()