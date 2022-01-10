import { Category } from "../model/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgreSQLCategoriesRepository implements ICategoriesRepository {
  create({ name, description }: ICreateCategoryDTO): void {
    console.log(`Name: ${name}\nDescription: ${description}`);
  }

  list(): Category[] {
    return null;
  }

  findByName(name: string): Category {
    console.log(`Name: ${name}`);
    return null;
  }
}

export { PostgreSQLCategoriesRepository };
