/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.


Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/

const $membersLength = document.querySelector("#family-members");
const $sendButton = document.querySelector("#members-button");
const $calculate = document.querySelector("#calculate");
const $clear = document.querySelector('#clear')

$sendButton.onclick = function () {
  deleteMembers();
  createMembers();

  // $resetButton.style.display = 'none'

  return false;
};

// $resetButton.onclick = function () {
//   deleteMembers();
// };

$calculate.onclick = function () {
  const memberAge = membersAges();
  const averageResult = document.createTextNode(
    "La edad promedio es: " + averageAge(memberAge)
  );
  const $averageAge = document.querySelector("#average-age");
  $averageAge.appendChild(averageResult);

  const oldestResult = document.createTextNode(
    "La mayor edad es: " + oldestMember(memberAge)
  );
  const $oldestMember = document.querySelector("#oldest-member");
  $oldestMember.appendChild(oldestResult);

  const youngestResult = document.createTextNode(
    "La menor edad es: " + youngestMember(memberAge)
  );
  const $youngestMember = document.querySelector("#youngest-member");
  $youngestMember.appendChild(youngestResult);

  // $clear.style.display = 'block'

  return false;
};

$clear.onlcik = function () {
  deleteMembers();

  return false
};

function createMember(index) {
  const $memberDiv = document.querySelector('#members-div');
  
  const $newLabel = document.createElement("label");
  $newLabel.textContent =
    "ingrese la edad del integrante " + (index + 1) + " :";
  const $newInput = document.createElement("input");
  $newInput.type = "number";
  $newInput.className = "member";

  const $newDiv = document.createElement('div')
  $newDiv.className = '.member-div'
  $newDiv.appendChild($newLabel)
  $newDiv.appendChild($newInput)

  $memberDiv.appendChild($newDiv);
}

function createMembers() {
  let membersValue = $membersLength.value;

  for (let i = 0; i < membersValue; i++) {
    createMember(i);
  }

  if (membersValue > 0) {
    $calculate.style.display = "block";
  } else {
    $calculate.style.display = "none";
  }
}

function deleteMembers() {
  const memberDiv = document.querySelectorAll('.member-div');
  for (let i = 0; i < memberDiv.length; i++) {
    memberDiv[i].remove();
  }

}

function membersAges() {
  let $members = document.querySelectorAll(".member");
  const memberAge = [];

  for (let i = 0; i < $members.length; i++) {
    memberAge.push(Number($members[i].value));
  }

  return memberAge;
}

function averageAge(memberAge) {
  let totalAmount = 0;

  for (let i = 0; i < memberAge.length; i++) {
    totalAmount += Number(memberAge[i]);
  }
  return Math.round(totalAmount / memberAge.length);
}

function youngestMember(memberAge) {
  let minorNumber = memberAge[0];

  for (let i = 0; i < memberAge.length; i++) {
    if (memberAge[i] < minorNumber) {
      minorNumber = memberAge[i];
    }
  }

  return minorNumber;
}

function oldestMember(memberAge) {
  let majorNumber = memberAge[0];

  for (let i = 0; i < memberAge.length; i++) {
    if (memberAge[i] > majorNumber) {
      majorNumber = memberAge[i];
    }
  }

  return majorNumber;
}
