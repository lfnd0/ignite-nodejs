import express from "express";

const port = 3333;
const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "Hello world!" });
});

app.post("/courses", (request, response) => {
  const { name } = request.body;

  return response.json({ name });
});

app.listen(port, () => {
  console.log(`Active app at: http://localhost:${port}`);
});
