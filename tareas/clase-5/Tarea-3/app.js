const $enviarDatos = document.querySelector("#calcular");

$enviarDatos.onclick = function () {
  validarForm();
  return false;
};

function calcularHoras(horas) {
  horas = document.querySelectorAll(".horas");
  let horasTotales = 0;
  for (let i = 0; i < horas.length; i++) {
    horasTotales += Number(horas[i].value);
  }
  return horasTotales;
}

function calcularMinutos(minutos) {
  minutos = document.querySelectorAll(".minutos");
  let minutosTotales = 0;
  for (let i = 0; i < minutos.length; i++) {
    minutosTotales += Number(minutos[i].value);
  }
  return minutosTotales;
}



function calcularSegundos(segundos) {
  segundos = document.querySelectorAll(".segundos");
  let segundosTotales = 0;
  for (let i = 0; i < segundos.length; i++) {
    segundosTotales += Number(segundos[i].value);
  }
  return segundosTotales;
}

function calcularTiempoTotal(){
  const horasTotales = calcularHoras()
  const minutosTotales = calcularMinutos()
  const segundosTotales = calcularSegundos()

  const segundosFinales = Math.round(segundosTotales % 60);
  const minutosFinales = Math.round(segundosTotales / 60) + Math.round(minutosTotales % 60);
  const horasFinales = horasTotales + Math.round(minutosFinales / 60);

  mostrarResultados(horasFinales, minutosFinales, segundosFinales)
  
}

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

function mostrarResultados(horasFinales, minutosFinales, segundosFinales) {
  const textNode = document.createTextNode(
    `El tiempo total es de ${horasFinales} horas ${minutosFinales} minutos ${segundosFinales} segundos`
  );
  document.querySelector("#tiempo-total-videos").appendChild(textNode);
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
  const exito = manejarErrores(errores) === 0;
  if (exito) {
    calcularTiempoTotal()
  }
  // event.preventDefault()
  // console.log('123')
}

function manejarErrores(errores) {
  let cantidadErrores = 0
  keys = Object.keys(errores);
  keys.forEach((key) => {
    const error = errores[key];
    if (error) {
      const nodeList = $form[key];
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.add("error");
      }
      return cantidadErrores++
    } else {
      const nodeList = $form[key]
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].classList.remove('error')
        
      }
    }
  });

  return cantidadErrores
}

const $form = document.querySelector("#form-tiempo-total");
// $form.onsubmit = validarForm()
