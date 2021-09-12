//Criação de objeto literal "Account", para utilização no cadastro de contas.

let Account = function (accNum, accType, accBalance, accHolder) {
  this.accountNumber = accNum
  this.accountType = accType
  this.balance = accBalance
  this.holder = accHolder
}

//Criação de Json para armazenar os dados dos cliente (simulando um banco de dados dos clientes do banco).

let clients = [
  {
    number: 5486273622,
    type: 'Conta Corrente',
    balance: 27771,
    holder: 'Abigael Natte'
  },

  {
    number: 1183971869,
    type: 'Conta Poupança',
    balance: 8675,
    holder: 'Ramon Connell'
  },

  {
    number: 5486273622,
    type: 'Conta Corrente',
    balance: 27771,
    holder: 'Abigael Natte'
  },

  {
    number: 9582019689,
    type: 'Conta Poupança',
    balance: 27363,
    holder: 'Jarret Lafuente'
  },

  {
    number: 1761924656,
    type: 'Conta Poupança',
    balance: 32415,
    holder: 'Ansel Ardley'
  },

  {
    number: 7401971607,
    type: 'Conta Poupança',
    balance: 18789,
    holder: 'Jacki Shurmer'
  },

  {
    number: 630841470,
    type: 'Conta Corrente',
    balance: 28776,
    holder: 'Jobi Mawtus'
  },

  {
    number: 4223508636,
    type: 'Conta Corrente',
    balance: 2177,
    holder: 'Thomasin Latour'
  },

  {
    number: 185979521,
    type: 'Conta Poupança',
    balance: 25994,
    holder: 'Lonnie Verheijden'
  },

  {
    number: 3151956165,
    type: 'Conta Corrente',
    balance: 7601,
    holder: 'Alonso Wannan'
  },

  {
    number: 2138105881,
    type: 'Conta Poupança',
    balance: 33196,
    holder: 'Bendite Huggett'
  }
]

//Realizar uma lista de objetos (Cadastro dos clientes)

let listClients = []
for (index in clients) {
  listClients.push(
    new Account(
      clients[index].number,
      clients[index].type,
      clients[index].balance,
      clients[index].holder
    )
  )
}

//Criação de objeto literal "Bank", para realizar os métodos "pesquisa de cliente", "depósito", "saque".

let Bank = {
  clientsBank: listClients,
  searchClient: function (name) {
    //Pesquisando clientes.
    for (index in listClients) {
      if (listClients[index].holder == name) {
        return listClients[index]
      }
    }
    return 'Cliente não encontrado!'
  },
  deposit: function (name, amount) {
    //Realizando depósito.
    for (index in listClients) {
      if (listClients[index].holder == name) {
        listClients[index].balance += amount
        return (
          'Depósito realizado, seu novo saldo é R$' + listClients[index].balance
        )
      }
    }
  },
  withdraw: function (name, amount) {
    //Realizando saque.
    for (index in listClients) {
      if (listClients[index].holder == name) {
        listClients[index].balance -= amount
        if (listClients[index].balance < 0) {
          return 'Fundos insuficientes'
        } else {
          return (
            'Extração feita com sucesso, seu novo saldo é: R$ ' +
            listClients[index].balance
          )
        }
      }
    }
  }
}

//Imprimir dados do cliente.
console.log(Bank.searchClient('Lonnie Verheijden'))
console.log('------------------------------------------------------------')

//Imprimir comprovante de depósito e o saldo atual do cliente.
console.log(Bank.deposit('Lonnie Verheijden', 5000))
console.log('------------------------------------------------------------')

//Imprimir comprovante de saque e o saldo atual do cliente.
console.log(Bank.withdraw('Lonnie Verheijden', 7602))
console.log('------------------------------------------------------------')
