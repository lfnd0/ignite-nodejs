import express from 'express';

const port = 3333;
const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello world!' });
});

app.listen(port, () => {
  console.log(`Active app at: http://localhost:${port}`);
});
