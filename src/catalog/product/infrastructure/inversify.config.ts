// inversify.config.ts
import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../../../../types";
import { DatabaseConnection } from "./database-connection.interface";
import { ProductRepository } from "../application/productRepository";
import { MongoProductRepository } from "./mongoProductRepository";
import { CreateProductUseCase } from "../application/use_cases/CreateProductUseCase";
import { MongoConnection } from "./mongoConnection";

const container = new Container();

// Registra MongoConnection como IDatabaseConnection
container.bind<DatabaseConnection>(TYPES.DatabaseConnection)
  .to(MongoConnection)
  .inSingletonScope();

// Mantén también el binding específico si es necesario
container.bind<MongoConnection>(TYPES.MongoConnection)
  .to(MongoConnection)
  .inSingletonScope();

container.bind<ProductRepository>(TYPES.ProductRepository)
  .to(MongoProductRepository);

container.bind<CreateProductUseCase>(TYPES.CreateProductUseCase)
  .to(CreateProductUseCase);

export { container };