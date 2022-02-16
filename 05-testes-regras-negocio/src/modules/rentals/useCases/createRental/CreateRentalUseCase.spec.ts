import { RentalsRepositoryInMemory } from "@modules/rentals/repositories/in-memory/RentalsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateRentalUseCase } from "./CreateRentalUseCase";

let rentalsRepositoryInMemory: RentalsRepositoryInMemory;
let createRentalUseCase: CreateRentalUseCase;

describe("Create rental", () => {
  beforeEach(() => {
    rentalsRepositoryInMemory = new RentalsRepositoryInMemory();
    createRentalUseCase = new CreateRentalUseCase(rentalsRepositoryInMemory);
  });

  it("Should be able to create a new rental.", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "4123",
      car_id: "9330",
      expected_return_date: new Date(),
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("Should not be able to create a new rental if there is another open to the same user.", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "4123",
        car_id: "9330",
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        user_id: "4123",
        car_id: "9330",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("Should not be able to create a new rental if there is another open to the same car.", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "6532",
        car_id: "4120",
        expected_return_date: new Date(),
      });

      await createRentalUseCase.execute({
        user_id: "3221",
        car_id: "4120",
        expected_return_date: new Date(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});