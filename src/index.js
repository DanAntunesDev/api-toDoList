// Importa o pacote Express
const express = require('express');

// Cria uma instancia do Express - App 'representa' toda a API
const app = express();

// Define a porta em que o servidor vai rodar.
const PORT = 3000;

// Middleware para o Express entender JSON
app.use(express.json());

// "Banco de Dados" em memoria
const tarefas = []

// Rota para criar uma nova tarefa (Create)
app.post('/tarefas', (req, res ) => {
  // 1. Pega a descrição do corpo da requisição
  const { description } = req.body;

  // 2. Cria um novo objeto de tarefa
  const novaTarefa = {
    id: tarefas.length + 1, // Cria ID simples
    description: description,
    done: false // Nova tarefa sempre começa como "não concluida"
  };

  // 3. Adiciona nova tarefa na lista
  tarefas.push(novaTarefa);

  // 4. Retorna a tarefa recem-criada com o status 201
  res.status(201).json(novaTarefa);
});

// Cria uma rota de teste para ver se tudo está funcionando.
app.get('/', (req, res) => {
  res.send('API To-Do List está no ar e funcionando!');
});

// Inicia o servidor para que ele comece a "ouvir" requisições.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

