// 1- Importa o Router do Express
const { Router } = require('express');

// 2- Cria uma instancia do Router
const routetr = Router();

// Banco de Dados em memoria
const tarefas = []

// Rota para criar uma nova tarefa (create)
router.post('/tarefas', (req,res) => {
  const { description } = req.body;
  const novaTarefa = {
    id: tarefas.length + 1,
    description: description,
    done: false
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa)
});

// Rota para listar todas as tarefas (Read)
router.get('/tarefas', (req,res) => {
  res.status(200).json(tarefas);
});

// 3- Exporta o router para ser usado no arquivo principal 
module.exports = router; 