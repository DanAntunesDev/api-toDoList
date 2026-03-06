// Importa o Router do Express
const { Router } = require('express');

// Cria uma instancia do Router
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

// Rota para nuscar uma tarefa especifica pelo ID ( Read)
router.get('/tarefas/:id', (req,res) => {
  // pega o ID dos parametros da rota
  const id = parseInt(req.params.id);

  // Procura a tarefa na lista pelo ID
  const tarefa = tarefas.find(t => t.id === id);

  // Verifica se a tarefa foi encontrada
  if (tarefa) {
    // Se encontrou, retorna a tarefa com status 200
    res.status(200).json(tarefa);
  } else {
    // Se não encontrou, retorna um erro 404
    res.status(404).json({ message: 'Tarefa não encontrada. '});
  }
});

// Exporta o router para ser usado no arquivo principal 
module.exports = router; 
