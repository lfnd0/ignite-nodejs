const express = require('express');
const port = 3333;
const app = express();

app.get('/courses', (request, response) => {
  return response.json([
    'Curso de JavaScript', 'Curso de Node.js', 'Curso de Git/GitHub'
  ]);
});

app.post('/courses', (request, response) => {
  return response.json([
    'Curso de JavaScript', 'Curso de Node.js', 'Curso de Git/GitHub', 'Curso de Docker'
  ]);
})

app.put('/courses/:id', (request, response) => {
  return response.json([
    'Curso de TypeScript', 'Curso de Node.js', 'Curso de Git/GitHub', 'Curso de Docker'
  ]);
});

app.patch('/courses/:id', (request, response) => {
  return response.json([
    'Curso de TypeScript', 'Curso de Nest.js', 'Curso de Git/GitHub', 'Curso de Docker'
  ]);
});

app.delete('/courses/:id', (request, response) => {
  return response.json([
    'Curso de TypeScript', 'Curso de Nest.js', 'Curso de Docker'
  ]);
});

app.listen(port, () => {
  console.log(`Active app at: http://localhost:${port}`);
})
