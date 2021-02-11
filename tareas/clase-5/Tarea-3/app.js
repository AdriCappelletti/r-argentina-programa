

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
  const $tiempoTotal = document.querySelector("#tiempo-total-videos")
  borrarResultados($tiempoTotal)
  $tiempoTotal.appendChild(textNode);
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
  event.preventDefault()
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
      const $tiempoTotal = document.querySelector("#tiempo-total-videos")
      borrarResultados($tiempoTotal)
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

function borrarResultados($tiempoTotal){
  $tiempoTotal.textContent = ''
} 

const $form = document.querySelector("#form-tiempo-total");
$form.onsubmit = validarForm
