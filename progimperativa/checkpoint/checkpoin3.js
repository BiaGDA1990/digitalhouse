/* Neste exercício, você terá que criar uma função que retorne um array com seus elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o modifique e inverta a ordem de seus elementos.
Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
Crie a função inverter que recebe um Array como argumento e retorna um novo invertido. */
var dados = [1, 2, 3, 4, 5]

function imprimirInverso(array) {
  console.log(array[4])
  console.log(array[3])
  console.log(array[2])
  console.log(array[1])
  console.log(array[0])
}
imprimirInverso(dados)

function inverter(array2) {
  let dadosinvertido = [array2[4], array2[3], array2[2], array2[1], array2[0]]
  return dadosinvertido
}
console.log(inverter(dados))
/*Neste exercício, você criará uma função somarArray() que aceita um array de números e retorna a soma de todos eles.
Exemplo:
somarArray([1,2,3])                // 6
somarArray([10, 3, 10, 4])     // 27
somarArray([-5,100])             // 95*/

let valores = [2, 5, 7, 8, 9, 5]

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
console.log(valor)

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

//Coleção de filmes - Criar a estrutura apropriada para armazenar os seguintes filmes e séries:

let filmes = [
  'star wars',
  'matrix',
  'mr. robot',
  'o preço do amanhã',
  'a vida é bela'
]
let filmes1 = filmes[1]
console.log(filmes1)

//Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.

function letrasMaiusculas(arrayFilmes) {
  for (index in arrayFilmes) {
    arrayFilmes[index] = arrayFilmes[index].toUpperCase()
  }
}
letrasMaiusculas(filmes) //SEM ELAS NAO FICA MAIUSCULA
console.log(filmes)

//Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de animação:
//	"toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"
//Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do // primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

let filmesInfantis = [
  'toy story',
  'finding Nemo',
  'kung-fu panda',
  'wally',
  'fortnite'
]
letrasMaiusculas(filmesInfantis)

let concatFilmes
function juntarFilmes(filmes1, filmes2) {
  concatFilmes = filmes1.concat(filmes2)
  return concatFilmes
}
console.log(juntarFilmes(filmes, filmesInfantis))

//Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.*/
let retornoPop = concatFilmes.pop()
console.log(concatFilmes)

//Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
//	const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
//	const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
//Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]

function notas(nota1, nota2) {
  for (index in nota1) {
    if (nota1[index] == nota2[index]) {
      console.log(
        'A nota ' + nota1[index] + ' e a nota ' + nota2[index] + ' são iguais'
      )
    } else {
      console.log(
        'A nota ' +
          nota1[index] +
          ' e a nota ' +
          nota2[index] +
          ' são diferentes'
      )
    }
  }
}
notas(asiaScores, euroScores)
