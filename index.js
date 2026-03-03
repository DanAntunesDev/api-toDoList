// 1. Importa o pacote Express
const express = require('express');

// 2. Cria uma instancia do Express - App 'representa' toda a API
const app = express();

// 3. Define a porta em que o servidor vai rodar.
const PORT = 3000;

// 4. Cria uma rota de teste para ver se tudo está funcionando.
app.get('/', (req, res) => {
  res.send('Servidor reiniciado automaticamente pelo Nodemon!');
});

// 5. Inicia o servidor para que ele comece a "ouvir" requisições.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});