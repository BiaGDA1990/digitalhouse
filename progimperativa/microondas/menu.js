function microondas(comida, tempo) {
  // São dois parametros, precisa receber comida e tempo
  let mensagem = ' '

  switch (comida) {
    case 'Pipoca':
      if (tempo >= 10 && tempo < 20) {
        mensagem = 'Prato pronto, bom apetite!'
      } else if (tempo >= 20 && tempo < 30) {
        mensagem = 'Comida queimou!'
      } else if (tempo >= 30) {
        mensagem = 'KABUMMMM'
      } else {
        mensagem = 'Tempo insuficiente'
      }
      break

    case 'Macarrão':
      if (tempo >= 8 && tempo < 16) {
        mensagem = 'Prato pronto, bom apetite!'
      } else if (tempo >= 16 && tempo < 24) {
        mensagem = 'Comida queimou!'
      } else if (tempo >= 24) {
        mensagem = 'KABUMMMM'
      } else {
        mensagem = 'Tempo insuficiente'
      }
      break

    case 'Carne':
      if (tempo >= 15 && tempo < 30) {
        mensagem = 'Prato pronto, bom apetite!'
      } else if (tempo >= 30 && tempo < 45) {
        mensagem = 'Comida queimou!'
      } else if (tempo >= 45) {
        mensagem = 'KABUMMMM'
      } else {
        mensagem = 'Tempo insuficiente'
      }
      break

    case 'Feijao':
      if (tempo >= 12 && tempo < 24) {
        mensagem = 'Prato pronto, bom apetite!'
      } else if (tempo >= 24 && tempo < 36) {
        mensagem = 'Comida queimou!'
      } else if (tempo >= 36) {
        mensagem = 'KABUMMMM'
      } else {
        mensagem = 'Tempo insuficiente'
      }
      break

    case 'Brigadeiro':
      if (tempo >= 8 && tempo < 16) {
        mensagem = 'Prato pronto, bom apetite!'
      } else if (tempo >= 16 && tempo < 24) {
        mensagem = 'Comida queimou!'
      } else if (tempo >= 24) {
        mensagem = 'KABUMMMM'
      } else {
        mensagem = 'Tempo insuficiente'
      }
      break
    default:
      mensagem = 'Prato inexistente'
  }
  return mensagem
}
console.log(microondas('Feijao', 13))

//git add
//git commit
//git master
