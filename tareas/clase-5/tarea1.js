const $botonCalcular = document.querySelector('#calculo-salario')

$botonCalcular.onclick = function(){
  let salarioAnual = Number(document.querySelector('#salario-anual').value)
  let salarioMensual = salarioAnual / 12

  if (!/^[0-9]+/.test(salarioAnual)) {
    return alert('Ingrese un numero valido por favor')
  }

  document.querySelector('#salario-mensual').value = Math.round(salarioMensual)
  return false;
}
