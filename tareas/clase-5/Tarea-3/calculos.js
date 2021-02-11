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
  