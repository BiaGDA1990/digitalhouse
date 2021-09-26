let dados = [
  { sexo: 'M', altura: 1.8 },
  { sexo: 'F', altura: 1.8 },
  { sexo: 'M', altura: 1.9 },
  { sexo: 'M', altura: 2 },
  { sexo: 'M', altura: 1.65 },
  { sexo: 'M', altura: 1.78 },
  { sexo: 'M', altura: 2.2 },
  { sexo: 'M', altura: 2.1 },
  { sexo: 'F', altura: 1.56 },
  { sexo: 'F', altura: 1.72 },
  { sexo: 'F', altura: 1.83 },
  { sexo: 'F', altura: 1.7 },
  { sexo: 'F', altura: 1.6 },
  { sexo: 'F', altura: 1.92 },
  { sexo: 'F', altura: 1.67 }
]

dados.sort(function (a, b) {
  return a.altura < b.altura ? -1 : a.altura > b.altura ? 1 : 0
})

console.log(dados[0], dados[14])

let mulheres = dados.filter(function (array) {
  return array.sexo === 'F'
})
console.log(mulheres)

function mediaMulheres(array) {
  var idadesTotal = 0
  for (var i = 0; i < array.length; i++) {
    idadesTotal += array[i].altura
  }
  return idadesTotal / array.length
}
console.log('----media mulheres-----')
console.log(mediaMulheres(mulheres))

function media(array) {
  let result = 0
  for (let i = 0; i < 8; i++) {
    result += array[i].altura
  }
  return result / 8
}

console.log(media(mulheres))

let homens = dados.filter(function (array) {
  return array.sexo === 'M'
})
console.log(homens.length)
