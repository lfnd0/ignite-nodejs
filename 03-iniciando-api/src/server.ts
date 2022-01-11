import express from "express";

import { categoriesRouter } from "./routes/categories.routes";
import { specificationRouter } from "./routes/specifications.routes";

const port = 3333;
const app = express();

app.use(express.json());

app.use("/categories", categoriesRouter);
app.use("/specifications", specificationRouter);

app.listen(port, () => {
  console.log(`Active app at: http://localhost:${port}`);
});
