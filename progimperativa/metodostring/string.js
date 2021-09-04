//lenght - é uma propriedade - da o tamanho do texto
let texto = 'Oi eu sou a fabiana'
console.log(texto.length)

// indexOf - (procura um valor) Metodo sempre tem parenteses, pois tem parametros
console.log(texto.indexOf('joao'))

//slice

let palavra = texto.slice(0, 5)
console.log(palavra)
console.log(texto)

//trim - tira espaço do começo e final
console.log(texto.trim())

//split - transforma em array
console.log(texto.split(' '))
let array = texto.split('O')
console.log(array)

//replace
console.log(texto.replace('fabiana', 'Maria'))
