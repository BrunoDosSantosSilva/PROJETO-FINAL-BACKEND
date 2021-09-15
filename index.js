const express = require('express');
const app = express();
app.use(express.json());
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions));

const Conn = require('./models/conn/conn');

Conn("localhost",27017,"tarefas");

const port = 3001;

const tarefaRouter = require('./routers/tarefas.routes');
app.use('/tarefa',tarefaRouter);

app.listen(process.env.PORT || port, ()=> {
    console.info(`Servidor rodando na porta ${port}`);
  })