const express = require('express');

// 1- importa o nosso modulo de rotas de tarefas
const tarefasRoutes = require('./routes/tarefasRoutes');

const app = express()
const PORT = 3000;

// Middleware para o Express entender JSON
app.use(express.json());

// 2- Diz ao app para usar as rotas importadas
app.use(tarefasRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.send('API To-Do List está no ar!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});