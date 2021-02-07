function testValidarHoras(){
    console.assert(validarHoras('') === 'Completa todas las horas con numeros positivos',
    'validar horas no valido que se haya ingresado un dato correcto')
}

function testValidarMinutos(){
    console.assert(
        validarMinutos('') === 'Completa todos los minutos con numeros positivos',
    'validar minutos no valido que se haya ingresado un dato correcto')
}

function testValidarSegundos(){
    console.assert(
        validarSegundos('') === 'Completa todos los segundos con numeros positivos',
    'validar segundos no valido que se haya ingresado un dato correcto')
}

testValidarHoras()
testValidarMinutos()
testValidarSegundos()