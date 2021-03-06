//Criando objeto para criação das contas

let Account = function (
  accountNumber,
  accountType,
  accountBalance,
  accountHolder
) {
  this.accountNumber = accountNumber
  this.accountType = accountType
  this.balance = accountBalance
  this.holder = accountHolder
}

//Json de Dados de clientes

let clients = [
  {
    number: 5486273622,
    type: 'Conta Corrente',
    balance: 27771,
    holder: 'Forrest Gump'
  },

  {
    number: 1183971869,
    type: 'Conta Poupança',
    balance: 8675,
    holder: 'Homer Simpson'
  },

  {
    number: 5486273622,
    type: 'Conta Corrente',
    balance: 27771,
    holder: 'Darth Vader'
  },

  {
    number: 9582019689,
    type: 'Conta Poupança',
    balance: 27363,
    holder: 'Gandalf'
  },

  {
    number: 1761924656,
    type: 'Conta Poupança',
    balance: 32415,
    holder: 'Ed Elric'
  },

  {
    number: 7401971607,
    type: 'Conta Poupança',
    balance: 18789,
    holder: 'Jackie Chan'
  },

  {
    number: 630841470,
    type: 'Conta Corrente',
    balance: 28776,
    holder: 'Eddie Murphy'
  },

  {
    number: 4223508636,
    type: 'Conta Corrente',
    balance: 2177,
    holder: 'Bruce Wayne'
  },

  {
    number: 185979521,
    type: 'Conta Poupança',
    balance: 25994,
    holder: 'Elga Solomon'
  },

  {
    number: 3151956165,
    type: 'Conta Corrente',
    balance: 7601,
    holder: 'Beatrix Kiddo'
  },

  {
    number: 2138105881,
    type: 'Conta Poupança',
    balance: 33196,
    holder: 'Sarah Connor'
  }
]

//Lista de objetos (Cadastro dos clientes)

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

//Criação do objeto Bank para pesquisa

let Bank = {
  clientsBank: listClients,
  searchClient: function (name) {
    //Método para realizar pesquisa de cliente.
    for (index in listClients) {
      if (listClients[index].holder == name) {
        return listClients[index]
      }
    }
    return 'Cliente não encontrado!'
  },
  deposit: function (name, amount) {
    //Operação para depósito.
    for (index in listClients) {
      if (listClients[index].holder == name) {
        listClients[index].balance += amount
        return (
          'Depósito efetuado com sucesso, seu novo saldo é R$' +
          listClients[index].balance
        )
      }
    }
  },
  withdraw: function (name, amount) {
    //Operação para saque.
    for (index in listClients) {
      if (listClients[index].holder == name) {
        listClients[index].balance -= amount
        if (listClients[index].balance < 0) {
          return 'Fundos insuficientes'
        } else {
          return (
            'Saque feito com sucesso, seu novo saldo é: R$ ' +
            listClients[index].balance
          )
        }
      }
    }
  }
}

//Cliente
console.log(Bank.searchClient('Bruce Wayne'))
console.log('------------------------------------------------------------')

//Depósito e Saldo
console.log(Bank.deposit('Bruce Wayne', 5000))
console.log('------------------------------------------------------------')

//Saque e saldo.
console.log(Bank.withdraw('Bruce Wayne', 7177))
console.log('------------------------------------------------------------')
