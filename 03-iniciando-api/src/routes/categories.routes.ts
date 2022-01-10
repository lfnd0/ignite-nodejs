import { Router } from "express";

import { PostgreSQLCategoriesRepository } from "../repositories/PostgreSQLCategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";

const categoriesRouter = Router();
const postgreSQLCategoriesRepository = new PostgreSQLCategoriesRepository();

categoriesRouter.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(
    postgreSQLCategoriesRepository
  );
  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRouter.get("/", (request, response) => {
  const listCategories = postgreSQLCategoriesRepository.list();

  return response.json(listCategories);
});

export { categoriesRouter };
