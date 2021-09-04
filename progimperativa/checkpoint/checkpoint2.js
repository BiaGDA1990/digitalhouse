/*Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
Exemplo:
somarArray([1,2,3])                // 6
somarArray([10, 3, 10, 4])     // 27
somarArray([-5,100])             // 95*/

/*let valores = [2, 5, 7, 8, 9, 5]

function somarArray(p) {
  let qtd = p.length //criado a variavel qtd para descobrir o tamanho do array
  let soma = 0 //criado uma variavel soma para definir como 0 e começar a somar
  for (let cont = 0; cont < qtd; cont++) {
    //variavel contador para somar as posições array
    soma = soma + p[cont] // variavel soma recebendo os valores dos array
  }
  return soma //final da soma
}

let valor = somarArray(valores) //criado variavel valor para receber a soma do array
console.log(valor)*/

//Neste exercício, você criará uma função chamada join que recebe um array e simula o comportamento do método Array.join().

let arrayJoin = ['f', 'a', 'b', 'i', 'a', 'n', 'a']
console.log('|--- Resultado Array Join ---|')
console.log(arrayJoin.join('/'))

function funcaoJoin(joinFake) {
  let joinfunction = ''
  for (let index = 3; index < joinFake.length; index++) {
    joinfunction = joinfunction + joinFake[index]
  }
  return joinfunction
  //return joinFake[0] + joinFake[1] + joinFake[2]
}

function funcaoJoin2(joinFake2) {
  let joinfunction2 = ''
  for (index in joinFake2) {
    joinfunction2 = joinfunction2 + joinFake2[index]
  }
  return joinfunction2
  //return joinFake[0] + joinFake[1] + joinFake[2]
}
console.log('|--- Resultado Join Fake ---|')
console.log(funcaoJoin(arrayJoin))
console.log(funcaoJoin2(arrayJoin))
