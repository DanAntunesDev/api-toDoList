# Node To-Do API

API REST para gerenciamento de tarefas desenvolvida com **Node.js** e **Express**.

Este projeto foi criado com foco em prática de desenvolvimento backend, implementação de operações CRUD e organização inicial de uma aplicação web baseada em rotas HTTP.

---

## Objetivo do projeto

O objetivo da aplicação é fornecer uma API simples para gerenciamento de tarefas, permitindo criar, listar, buscar, atualizar e remover registros.

Esse tipo de projeto ajuda a consolidar conceitos fundamentais de backend como:

- criação de servidor HTTP
- definição de rotas
- manipulação de requisições e respostas
- organização inicial de uma API REST

---

## Tecnologias utilizadas

- Node.js
- Express
- JavaScript
- Nodemon

---

## Funcionalidades

A API possui as seguintes operações:

- criar uma nova tarefa
- listar todas as tarefas
- buscar uma tarefa por ID
- atualizar uma tarefa existente
- remover uma tarefa

---

## Rotas disponíveis

### Criar tarefa

`POST /tarefas`

Exemplo de body:

```json
{
  "description": "Estudar Node.js"
}
```

---

### Listar tarefas

`GET /tarefas`

---

### Buscar tarefa por ID

`GET /tarefas/:id`

---

### Atualizar tarefa

`PUT /tarefas/:id`

Exemplo de body:

```json
{
  "description": "Estudar Express",
  "done": true
}
```

---

### Remover tarefa

`DELETE /tarefas/:id`

---

## Estrutura do projeto

A aplicação está organizada da seguinte forma:

```
src/
  index.js
  routes/
    tarefasRoutes.js
```

Essa estrutura separa o ponto de entrada da aplicação das rotas responsáveis pela lógica do CRUD.

---

## Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/DanAntunesDev/node-todo-api.git
```

Acesse a pasta do projeto:

```bash
cd node-todo-api
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor em desenvolvimento:

```bash
npm run dev
```

O servidor será iniciado em:

```
http://localhost:3000
```

---

## Funcionamento atual

Atualmente os dados são armazenados em memória utilizando um array local.

Isso significa que:

- as tarefas existem apenas enquanto o servidor estiver rodando
- ao reiniciar a aplicação, os dados são perdidos

Essa abordagem foi utilizada para foco no aprendizado da lógica da API antes da integração com banco de dados.

---

## Próximas melhorias

Este projeto pode evoluir com melhorias como:

- integração com banco de dados
- validação de dados de entrada
- separação em controllers e services
- tratamento centralizado de erros
- documentação da API
- testes automatizados

---

## Autor

Daniel Antunes
