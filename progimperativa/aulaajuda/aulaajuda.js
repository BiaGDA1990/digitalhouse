let a = 6
let b = 4

if (a > b) {
  console.log('o valor ' + a + ' é o maior')
  //} else {
  //  console.log('o valor ' + b + ' é o maior')
}

/*let senha = ''

if (senha == 1234) {
  console.log('Senha permitida!')
} else if (senha == '') {
  console.log('Digite sua senha!')
} else {
  console.log('Acesso negado!')
}*/

/*let valores = [2, 5, 7, 8, 9, 5]

function somarArray(p) {
  let qtd = p.length //criado a variavel qtd para descobrir o tamanho do array
  let soma = 0 //criado uma variavel soma para definir como 0 e começar a somar
  for (let cont = 0; cont < qtd; cont++) {
    //variavel contador para somar as posições array
    soma = soma + p[cont] // variavel soma recebendo os valores dos array
  }
  return soma //final da soma
}*/

let valor = somarArray(valores) //criado variavel valor para receber a soma do array
console.log(valor)
