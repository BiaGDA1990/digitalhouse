let nome = 'Aline'
let sobrenome = 'Ferreira'
let idade = 33
let peso = 63.7
let altura = 1.53
let plano = 'nao tem'

let imc = peso / (altura * altura)

console.log(
  nome +
    ' ' +
    sobrenome +
    ' tem ' +
    idade +
    ' anos' +
    ' e seu imc é de ' +
    imc.toFixed(2)
)
