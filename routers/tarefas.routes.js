const express = require('express');
const router = express.Router();
const Tarefa = require('../models/tarefas');
const tarefasController = require('../controllers/tarefas.controller')
 

router.post("/add", tarefasController.create);

router.get('/',tarefasController.read);

router.get('/findById/:id',tarefasController.readID);

router.delete("/delete/:id",tarefasController.delete);

router.put("/update/:id", tarefasController.update);

module.exports = router;