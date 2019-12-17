const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransacaoSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: false },
  valor: { type: Number, required: false },
  data: { type: Date, required: false },
  descricao: { type: String, required: false },
  destinatario: { type: String, required: false },
  remetente: { type: String, required: false },
  tipo: { type: String, required: false },
  grupo: { type: String, required: false },
})

const transacaoModel = mongoose.model('transacao', TransacaoSchema);

module.exports = transacaoModel;