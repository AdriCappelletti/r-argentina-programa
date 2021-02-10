function testValidarHoras(){
    console.assert(validarHoras([{value: ''}, {value: ''}]) === 'Completa todas las horas con numeros positivos',
    'validar horas no valido que se haya ingresado un dato correcto')
    console.assert(validarHoras([{value: '3'},{value: 2}]) === '', 
    'No se puso validar una hora valida')
}

function testValidarMinutos(){
    console.assert(
        validarMinutos([{value: ''},{value: ''}]) === 'Completa todos los minutos con numeros positivos',
    'validar minutos no valido que se haya ingresado un dato correcto')
    console.assert(validarMinutos([{value: '1'},{value: '1'}]) === '', 
    'No se puso validar un minuto valido')
}

function testValidarSegundos(){
    console.assert(
        validarSegundos([{value: ''},{value: ''}]) === 'Completa todos los segundos con numeros positivos',
    'validar segundos no valido que se haya ingresado un dato correcto')
    console.assert(validarSegundos([{value: '1'},{value: '2'}]) === '', 
    'No se puso validar un segundo valido')
}

testValidarHoras()
// testValidarMinutos()
// testValidarSegundos()