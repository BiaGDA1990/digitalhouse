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

/*let valores = [2, 5, 7, 8, 9, 5]

function somarArray(p) {
  let qtd = p.length
  let soma = 0
  for (let cont = 0; cont < qtd; cont++) {
    soma = soma + p[cont]
  }
  return soma
}

let valor = somarArray(valores)
console.log(valor)*/
