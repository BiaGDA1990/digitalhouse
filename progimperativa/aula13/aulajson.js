/*let cadastro = {
  nome: ['Fabiana', 'Ariadne', 'Marina'],
  Apelido: ['Bia', 'Ari', 'bb'],
  idade: 31,
  usuario: 'BiaGDA',
  email: 'biagda@hotmail.com'
}

console.log(cadastro.Apelido)

let carro = {
  cor: 'branco',
  andar: function (velocidade) {
    return 'Andando na velocidade ' + velocidade
  }
}

console.log(carro.andar('130km'))*/

let notebook = {
  marca: 'dell',
  funcionar: function (status) {
    //  return 'O computador está ' + status
    console.log('Esse notebook é da marca ' + this.marca)
  }
}
//console.log(notebook.funcionar('ligado'))
notebook.funcionar()
