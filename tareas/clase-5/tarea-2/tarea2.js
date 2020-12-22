const $enviarDatos = document.querySelector("#enviar");
const primerNombre = document.querySelector("#primer-nombre");
const displayInfo = document.querySelector("#display-info");
const headMsg = document.querySelector("#head-message");
const userInfo = document.querySelectorAll("input");

// $enviarDatos.onclick = function () {

//   headMsg.textContent = 'bienvenido ' + primerNombre.value + ' !'

//   for (let i = 0; i < userInfo.length; i++) {

//     const paragraphText = document.createTextNode(userInfo[i].value)
//     const newParagraph = document.createElement('p');

//     newParagraph.appendChild(paragraphText)
//     displayInfo.appendChild(newParagraph);

//   }

//   return false;
// }

$enviarDatos.onclick = function () {
  headMsg.textContent = "bienvenido " + primerNombre.value + " !";
  const newUl = document.createElement("ul");

  for (let i = 0; i < userInfo.length; i++) {
    let newLi = document.createElement("li");
    newLi.textContent = userInfo[i].value;

    displayInfo.appendChild(newUl);
    newUl.appendChild(newLi);
  }

  return false;
};






//
// const segundoNombre = document.querySelector('#segundo-nombre')
// const apellido = document.querySelector('#apellido')
// const edad = document.querySelector('#edad')

// displayInfo.innerText = [primerNombre.value, segundoNombre.value, apellido.value, edad.value]

// $enviarDatos.onclick = function(){

//     headMsg.innerText = 'Bienvenido/a ' + primerNombre.value + ' !';

//     for (let i = 0; i < userInfo.length; i++) {
//         displayInfo.innerText = userInfo[i].value

//     }
//     return false
// }
