const { connect } = require('../models/Repository')
const transacaoModel = require('../models/TransacaoSchema')

connect()


const getAll = (request, response) => {
  transacaoModel.find((error, transacao) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(200).send(transacao)
  })
}

const getById = (request, response) => {
  const id = request.params.id
  const tipo = request.params.tipo

  // const transacaoModel.getById(tipo, (entrada, saida)) =>{
  //  var opcoes = [entrada, saida]
  //  if(tipo == entrada){
  //    return opcoes[0];
  //  }else if(tipo == saida){
  //    return opcoes[1];
  //  }
  // }
  return transacaoModel.findById(id, (error, transacao) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (transacao) {
      return response.status(200).send(transacao)
    }

    return response.status(404).send('Transação não encontrada.')
  })
}

const add = (request, response) => {
  const novaTransacao = new transacaoModel(request.body)

  novaTransacao.save((error) => {
    if (error) {
      return response.status(500).send(error)
    }

    return response.status(201).send(novaTransacao)
  })
}

const remove = (request, response) => {
  const id = request.params.id

  transacaoModel.findByIdAndDelete(id, (error, transacao) => {
    if (error) {
      return response.status(500).send(error)
    }

    if (transacao) {
      return response.status(200).send(id)
    }

    return response.status(404).send('Transação não encontrado.')
  })
}

const update = (request, response) => {
  const id = request.params.id
  const transacaoUpdate = request.body
  const options = { new: true }

  transacaoModel.findByIdAndUpdate(
    id,
    transacaoUpdate,
    options,
    (error, transacao) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (transacao) {
        return response.status(200).send(transacao)
      }

      return response.status(404).send('Trasação não encontrado.')
    }
  )
}


module.exports = {
  getAll,
  getById,
  add,
  remove,
  update
}
