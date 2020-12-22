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
    `tu tiempo es ${horasFinales} horas ${minutosFinales} minutos ${segundosFinales} segundos`
  );
  document.querySelector("#tiempo-total-videos").appendChild(textNode);

  return false;
};

console.log(20 % 60);
