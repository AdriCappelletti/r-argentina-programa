const $botonCalcular = document.querySelector('#calculo-salario')

$botonCalcular.onclick = function(){
  let salarioAnual = Number(document.querySelector('#salario-anual').value)
  let salarioMensual = salarioAnual / 12

  document.querySelector('#salario-mensual').value = Math.round(salarioMensual)
  return false;
}
