const Tarefa = require('../models/tarefas');

module.exports = {

    async read(req, res) {
        await Tarefa.find().then((tarefa) => {
            res.status(200).send(tarefa);
        })
            .catch((err) => {
                res.status(400).send("Algo deu errado! tente novamente.");
                console.log(err);
            })
    },

    async readID(req,res){
        await Tarefa.find({_id : req.params.id})
        .then((tarefa) => {
            res.status(200).send(tarefa);
        })
        .catch((err) => {
            res.status(400).send("Algo deu errado! tente novamente.");
            console.log(err);
        })
    },

    async create(req, res) {
        await Tarefa.create(req.body)
            .then(() => {
                res.status(200).send("Tarefa adicionada com sucesso");
            }).catch((err) => {
                res.status(400).send("Algo deu errado! tente novamente.");
                console.log(err);
            });
    },

    async delete(req, res){
        await Tarefa.deleteOne({_id : req.params.id})
        .then(() => {
            res.status(200).send("Deletado com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Algo deu errado! tente novamente.");
            console.log(err);
        });
    },

    async update(req,res){
        await Tarefa.updateOne({_id : req.params.id},req.body)
        .then(() => {
            res.status(200).send("Atualizado com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Algo deu errado! tente novamente.");
            console.log(err);
        });
    },

}

