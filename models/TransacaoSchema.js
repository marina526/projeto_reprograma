const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TransacaoSchema = new Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
  valor: { type: Number, required: true },
  data: { type: Date, required: true },
  descricao: { type: String, required: false },
  destinatario: { type: String, required: false },
  remetente: { type: String, required: false },
  tipo: { type: String, required: true },
  grupo: { type: String, required: true }
})

const transacaoModel = mongoose.model('transacao', TransacaoSchema);

module.exports = transacaoModel;