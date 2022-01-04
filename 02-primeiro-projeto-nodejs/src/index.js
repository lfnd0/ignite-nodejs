const express = require('express');
const { v4: uuidv4 } = require('uuid');

const port = 3333;
const app = express();

const customers = [];

app.use(express.json());

app.post('/account', (request, response) => {
  const { cpf, name } = request.body;
  const id = uuidv4();

  customers.push({
    cpf,
    name,
    id,
    statement: []
  });

  return response.status(201).send()
});

app.listen(port, () => {
  console.log(`Active app at: http://localhost:${port}`)
});
