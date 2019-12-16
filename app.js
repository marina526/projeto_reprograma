const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const transacao = require('./routes/transacao')
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/transacao', transacao)

app.get('/', (request, response) => {
  response.send('Olá, mundo!')
})

app.listen(PORT)
console.info(`Rodando na porta ${PORT}`)
