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

const treinar = async (request, response) => {
  const id = request.params.id
  const options = { new: true }
  const pokemon = await pokemonsModel.findById(id, 'nivel')
  const novoNivel = calcularNivel(request.body.inicio, request.body.fim, pokemon.nivel)

  pokemonsModel.findByIdAndUpdate(
    id,
    { nivel: novoNivel },
    options,
    (error, pokemon) => {
      if (error) {
        return response.status(500).send(error)
      }

      if (pokemon) {
        return response.status(200).send(pokemon)
      }

      return response.status(404).send('Pokémon não encontrado')
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
