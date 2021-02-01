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
const $reset = document.querySelector("#restart");
const $form = document.querySelector("#main-form");

$sendButton.onclick = function (event) {
  const membersQuantity = $form["family-members"].value;
  ValidateFormMembersQuantity()
  deleteMembers();
  createMembers(membersQuantity);

  event.preventDefault();
};

$calculate.onclick = function (event) {
  deleteResults();
  validateFormMembersAges();

  event.preventDefault();
};

$reset.onclick = function () {
  deleteMembers();
  deleteResults();
  $reset.className = "oculto";
};

function createMember(index) {
  const $memberDiv = document.querySelector("#members-div");

  const $newLabel = document.createElement("label");
  $newLabel.textContent =
    "ingrese la edad del integrante " + (index + 1) + " :";
  const $newInput = document.createElement("input");
  $newInput.type = "number";
  $newInput.className = "member";
  $newInput.name = "age";

  const $newDiv = document.createElement("div");
  $newDiv.className = "member-container";
  $newDiv.appendChild($newLabel);
  $newDiv.appendChild($newInput);

  $memberDiv.appendChild($newDiv);
  $reset.className = "";

  return false;
}

function createMembers(quantity) {
  let membersValue = quantity;

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
  const memberDiv = document.querySelectorAll(".member-container");
  for (let i = 0; i < memberDiv.length; i++) {
    memberDiv[i].remove();
  }
  $calculate.style.display = "none";
}

function deleteResults() {
  const results = document.querySelectorAll(".result");
  for (let i = 0; i < results.length; i++) {
    results[i].textContent = "";
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

function showResults() {
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
}

function validateMembersQuantity(integrantes) {
  if (integrantes === "") {
    return "Debe ingresar al menos un integrante";
  }

  if (integrantes <= 0) {
    return "Debe ingresar un numero mayor a 0";
  }
  
  return "";
}

function validateMembersAges(edadIntegrantes) {
  for (let i = 0; i < edadIntegrantes.length; i++) {
    if (edadIntegrantes[i].value <= 0) {
      return "Las edades deben ser valores positivos";
    }
  }
  return "";
}
//                                                                                      VALIDACIONES


function ValidateFormMembersQuantity(event) {
  const cantidadIntegrantes = $form["family-members"].value;
  
  const errorCantidadIntegrantes = validateMembersQuantity(
    cantidadIntegrantes
    );
    
    const errores = {
      "family-members": errorCantidadIntegrantes,
    };
    manejarErrores(errores);
  }
  
function validateFormMembersAges() {
  const ages = document.querySelectorAll(".member");
  const errorEdadesIntegrantes = validateMembersAges(ages);

  const errors = {
    age: errorEdadesIntegrantes,
  };

  const exito = manejarErrores(errors) === 0;

  if (exito) {
    showResults();
  }
}

function manejarErrores(errores) {
  let cantidadErrores = 0;
  const $errores = document.querySelector("#errores");
  const keys = Object.keys(errores);
  keys.forEach(function (key) {
    const error = errores[key];
    if (key === "age" && error !== "") {
      const nodeList = $form[key];

      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.add("error");
      }
      createError(error);
      return cantidadErrores++;
    } else if (error) {
      console.log(error);
      $form[key].className = "error";
      createError(error);
      cantidadErrores++;
    } else {
      $form[key].className = ''
      const nodeList = $form[key];
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove('error')
      }
      $errores.className = "oculto";
    }
  });

  return cantidadErrores;
}

function createError(error) {
  resetError();
  const $errores = document.querySelector("#errores");
  const $ul = document.querySelector(".ulErrores");
  const $newLi = document.createElement("li");
  $newLi.className = "listError";
  $newLi.innerText = error;
  $ul.appendChild($newLi);
  $errores.className = "";
}

function resetError() {
  const $listError = document.querySelectorAll(".listError");
  for (let i = 0; i < $listError.length; i++) {
    $listError[i].remove();
  }
}
