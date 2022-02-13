import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";

interface IRequest {
  name?: string;
  brand?: string;
  categry_id?: string;
}

class ListCarsUseCase {
  constructor(private carsRepository: ICarsRepository) {}

  async execute({ name, brand, categry_id }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable(
      name,
      brand,
      categry_id
    );

    return cars;
  }
}

export { ListCarsUseCase };
