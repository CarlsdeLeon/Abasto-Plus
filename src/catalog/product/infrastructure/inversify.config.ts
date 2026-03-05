import "reflect-metadata";
import { Container } from "inversify";
import { TYPES } from "../../../../types";
import { ProductRepository } from "../application/productRepository";
import { MongoProductRepository } from "./mongoProductRepository";
import { CreateProductUseCase } from "../application/use_cases/CreateProductUseCase";
import { MongoConnection } from "./mongoConnection";

const container = new Container();

container.bind<MongoConnection>(TYPES.MongoConnection)
  .to(MongoConnection)
  .inSingletonScope(); 

container.bind<ProductRepository>(TYPES.ProductRepository)
  .to(MongoProductRepository);

container.bind<CreateProductUseCase>(TYPES.CreateProductUseCase)
  .to(CreateProductUseCase);

export { container };