const mongoose = require('mongoose');

const tarefaModel = new mongoose.Schema({
    titulo:{type: String},
    descricao:{type: String},
    prioridade:{type: Boolean},
    statos:{type: Boolean},
    prazo:{type: Boolean},
    dataCriacao:{ type: Date, default: Date.now}
})


const Tarefa = mongoose.model("tarefa", tarefaModel);

module.exports = Tarefa;