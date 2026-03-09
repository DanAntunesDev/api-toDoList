// Importa o Router do Express
const { Router } = require('express');

// Cria uma instancia do Router
const router = Router();

// Banco de Dados em memoria
const tarefas = [];

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
router.get('/tarefas', (req, res) => {
  res.status(200).json(tarefas);
});

// Rota para Buscar uma tarefa especifica pelo ID ( Read)
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

// Rota para atualizar uma tarefa (Update)
router.put('/tarefas/:id', (req, res) => {
  // Pega o ID dos parametros e os novos dados do corpo
  const id = parseInt(req.params.id);
  const { description, done } = req.body;

  // Encontra o INDICE da tarefa no array
  const indexDaTarefa = tarefas.findIndex(t  => t.id === id);

  // verifica se a tarefa existe (se o indice for -1, não encontrou)
  if (indexDaTarefa !== -1 ){
    // Atualiza os dados da tarefa encontrada
    const tarefaAtualizada = {
      ...tarefas[indexDaTarefa], // pega todos os dados atuais
      description: description || tarefas[indexDaTarefa].description, // Atualiza a descrição se ela for enviada
      done: typeof done === 'boolean' ? done : tarefas [indexDaTarefa].done // Atualiza o 'done' se ele for enviado
    };

    // Substitui a tarefa antiga pela nova array
    tarefas[indexDaTarefa] = tarefaAtualizada;

    // Retorna a tarefa atualizada
    res.status(200).json(tarefaAtualizada);
  } else {
    // Se não encontrou, retornou um erro 404
    res.status(404).json({ message: 'Tarefa não encontrada.'});
  }
});

// Rota para deletar uma tarefa (delete)
router.delete('/tarefas/:id', (req,res) => {
  // Pega o ID dos parametros da rota
  const id = parseInt(req.params.id);

  // Encontra o INDICE da tarefa que queremos deletar
  const indexDaTarefa = tarefas.findIndex(t => t.id === id);

  // Verifica se a tarefa existe
  if (indexDaTarefa !== -1) {
    // Remove a tarefa do array usando o seu indice
    tarefas.splice(indexDaTarefa, 1);

    // Retorna uma resposta de sucesso, sem conteudo
    res.status(204).send();
  } else {
    // Se não encontrou, retorna o erro 404
    res.status(404).json({ message: 'Tarefa não encontrada.'});
  }
});
// Exporta o router para ser usado no arquivo principal 
module.exports = router; 
