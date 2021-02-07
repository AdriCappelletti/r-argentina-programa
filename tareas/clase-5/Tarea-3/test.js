function testValidarHoras(){
    console.assert(validarHoras('') === 'Completa todas las horas con numeros positivos',
    'validar horas no valido que se haya ingresado un dato correcto')
    console.assert(validarHoras(2) === '', 
    'No se puso validar una hora valida')
}

function testValidarMinutos(){
    console.assert(
        validarMinutos('') === 'Completa todos los minutos con numeros positivos',
    'validar minutos no valido que se haya ingresado un dato correcto')
    console.assert(validarMinutos(2) === '', 
    'No se puso validar un minuto valido')
}

function testValidarSegundos(){
    console.assert(
        validarSegundos('') === 'Completa todos los segundos con numeros positivos',
    'validar segundos no valido que se haya ingresado un dato correcto')
    console.assert(validarSegundos(2) === '', 
    'No se puso validar un segundo valido')
}

testValidarHoras()
testValidarMinutos()
testValidarSegundos()