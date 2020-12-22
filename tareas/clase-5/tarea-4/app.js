const listContent = document.querySelectorAll("li");
const displayPromedio = document.querySelector("#promedio");
const displayNumeroMasPequeño = document.querySelector("#numero-mas-pequeño");
const displayNumeroMasFrecuente = document.querySelector("#numero-mas-frecuente")
const displayNumeroMasGrande = document.querySelector('#numero-mas-grande')

totalSuma = 0;
totalNotas = Number(listContent.length);
const sumarNumeros = function () {
  for (let i = 0; i < listContent.length; i++) {
    totalSuma += Number(listContent[i].textContent);
  }

  return totalSuma;
};

sumarNumeros();

function promedio(promedioFinal) {
  promedioFinal = Math.round(totalSuma / totalNotas);

  const textNode = document.createTextNode('Tu promedio final es ' + promedioFinal);
  return displayPromedio.appendChild(textNode);
}

promedio();

function numeroMasFrecuente() {
  let $numeroMasFrecuente;
  let $repeticionesNumero;
  let contador = 0;
  for (let i = 0; i < listContent.length; i++) {
    let numeroActual = listContent[i].textContent;
    for (let j = i + 1; j < listContent.length; j++) {
      let numeroComparado = listContent[j].textContent;
      if (numeroComparado === numeroActual) {
        $repeticionesNumero = contador + 1;
      }
      if ($repeticionesNumero > contador) {
        $numeroMasFrecuente = numeroActual;
        contador = $repeticionesNumero;
      }
    }
  }
  let numeroFrecuenteNode = document.createTextNode(
    `El numero más frecuente es: ${$numeroMasFrecuente}`
  );
  
    displayNumeroMasFrecuente.appendChild(numeroFrecuenteNode);
}

numeroMasFrecuente();

let listArray = [];
for (let i = 0; i < listContent.length; i++) {
  listArray += listContent[i].textContent;
}

function numeroMasPequeño(smallerNumber) {
  smallerNumber = listArray[0];

  for (let i = 1; i < listContent.length; i++) {
    if (listContent[i].textContent < smallerNumber) {
      smallerNumber = listArray[i];
    }
  }
  const smallerNumberNode = document.createTextNode(
    "el numero mas pequeño es " + smallerNumber
  );
  displayNumeroMasPequeño.appendChild(smallerNumberNode);
}

numeroMasPequeño();


function numeroMasGrande(mayorNumero) {

  mayorNumero = listArray[0];

  for (let i = 1; i < listContent.length; i++) {
   const numeroActual = listContent[i].textContent;
    if (numeroActual > mayorNumero) {
      mayorNumero = listArray[i];
    }
  }
  const mayorNumeroNode = document.createTextNode(
"el numero mas grande es " + mayorNumero
  );
  displayNumeroMasGrande.appendChild(mayorNumeroNode);
}

numeroMasGrande();