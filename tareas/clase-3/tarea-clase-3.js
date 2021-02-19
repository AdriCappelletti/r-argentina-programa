// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

// let userName = prompt('Hola! como te llamas?').toLowerCase()

function compareNames(name) {
    const myName = 'Adriano'.toLowerCase()
    const friendName = 'Juan'.toLowerCase()
    if (name === myName) {
        console.log(`Hola, Tocayo! yo tambien me llamo ${name}`)
    } else if (name === friendName) {
        console.log(`Hola ${name}Te llamas igual que un amigo`)
    } else{
        console.log('Hola ' + name)
    }
}



//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

function  sameAge() {
    let myAge = '23'
    const userAge = prompt('Cual es tu edad?')
    if (userAge === myAge) {
        console.log('Tenemos la misma edad!')
    } else if (userAge > myAge) {
        console.log('Sos mas grande que yo')
    } else{
        console.log('sos mas chico/a')
    }
}
sameAge()

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.

function validateDocument() {
   const document = prompt("Hola, tenes documento?", "si/no").toLowerCase();
   if (document === 'si') {
       enterBar()
   } else(alert('No podes ingresar sin documento'))
}

function enterBar() {
   const age = prompt('Que edad tenes?') 
  if (age >= 18) {
      alert('Bienvenido/a, podes ingresar')
  } else if (age < 18) {
      alert('Tenes que ser mayor de 18 para ingresar')
  } 
  else {
    alert("No entendi tu respuesta");
    setTimeout(function () {
      validateDocument();
    }, 500);
  }
}

