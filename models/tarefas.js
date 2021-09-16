const mongoose = require('mongoose');

const tarefaModel = new mongoose.Schema({
    titulo:{type: String},
    descricao:{type: String},
    prioridade:{type: String},
    statos:{type: String},
    prazo:{type: Date},
    dataCriacao:{ type: Date, default: Date.now}
})


const Tarefa = mongoose.model("tarefa", tarefaModel);

module.exports = Tarefa;