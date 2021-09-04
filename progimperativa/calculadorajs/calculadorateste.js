// Função que soma dois valores
function somarValores(valor1, valor2) {
  return valor1 + valor2
}
// Função que subtrai o segundo valor do primeiro
function subtrairValores(valor1, valor2) {
  return valor1 - valor2
}
// Função que multiplica dois valores
function multiplicarValores(valor1, valor2) {
  return valor1 * valor2
}
// Função que divide o primeiro valor pelo segundo
function dividirValores(valor1, valor2) {
  if (valor2 == 0) {
    return 'Erro, divisão por zero!'
  } else {
    return valor1 / valor2
  }
}
//Função quadrado do número
function quadradoNumero(valor1) {
  return multiplicarValores(valor1, valor1)
}

//Função media de tres numeros
function mediaDeTresNumeros(valor1, valor2, valor3) {
  let soma1 = somarValores(valor1, valor2)
  let soma2 = somarValores(soma1, valor3)
  return dividirValores(soma2, 3)
}

//Função calcular porcentagem
function calculaPorcentagem(valor1, valor2) {
  let divisao = dividirValores(valor1, 100)
  return multiplicarValores(divisao, valor2)
}

function geradorDePorcentagem(valor1, valor2) {
  multiplicar = valor1 * 100
  return dividirValores(multiplicar, valor2)
}

console.log('----------Teste de Operações / Calculadora----------')
console.log(somarValores(2, 10))
console.log(subtrairValores(10, 3))
console.log(multiplicarValores(10, 3))
console.log(dividirValores(10, 0))
console.log(quadradoNumero(2, 2))
console.log(mediaDeTresNumeros(4, 4, 5))
console.log(calculaPorcentagem(300, 15))
console.log(geradorDePorcentagem(10, 200))
