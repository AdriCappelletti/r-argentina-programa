const horas = document.querySelectorAll(".horas");
const minutos = document.querySelectorAll(".minutos");
const segundos = document.querySelectorAll(".segundos");

const $enviarDatos = document.querySelector("#calcular");

$enviarDatos.onclick = function () {
  let horasTotales = 0;
  let minutosTotales = 0;
  let segundosTotales = 0;

  for (let i = 0; i < horas.length; i++) {
    horasTotales += Number(horas[i].value);
    console.log(typeof horas[i].value);
  }

  for (let i = 0; i < minutos.length; i++) {
    minutosTotales += Number(minutos[i].value);
  }

  for (let i = 0; i < segundos.length; i++) {
    segundosTotales += Number(segundos[i].value);
  }
  const segundosFinales = Math.round(segundosTotales % 60);
  const minutosFinales =
    Math.round(segundosTotales / 60) + Math.round(minutosTotales % 60);
  const horasFinales = horasTotales + Math.round(minutosFinales / 60);

  const textNode = document.createTextNode(
    `El tiempo total es de ${horasFinales} horas ${minutosFinales} minutos ${segundosFinales} segundos`
  );
  document.querySelector("#tiempo-total-videos").appendChild(textNode);

  return false;
};

let $form = document.querySelector("#form");
function validarHoras(horas) {
  for (let i = 0; i < horas.length; i++) {
    let hora = horas[i].value;
    if (!/[0-9]+$/.test(hora)) {
      return "Completa todas las horas con numeros positivos";
    }
  }
  return "";
}

function validarMinutos(minutos) {
  for (let i = 0; i < minutos.length; i++) {
    let minuto = minutos[i].value;
    if (!/[0-9]+$/.test(minuto)) {
      return "Completa todos los minutos con numeros positivos";
    }
  }
  return "";
}

function validarSegundos(segundos) {
  for (let i = 0; i < segundos.length; i++) {
    let segundo = segundos[i].value;
    if (!/[0-9]+$/.test(segundo)) {
      return "Completa todos los segundos con numeros positivos";
    }
  }
  return "";
}

function validarForm(event) {
  const horas = $form.horas;
  const minutos = $form.minutos;
  const segundos = $form.segundos;

  const errorHoras = validarHoras(horas);
  const errorMinutos = validarMinutos(minutos);
  const errorSegundos = validarSegundos(segundos);

  const errores = {
    horas: errorHoras,
    minutos: errorMinutos,
    segundos: errorSegundos,
  };
}
