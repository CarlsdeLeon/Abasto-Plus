import { injectable } from "inversify";
import { ProductModel } from "./productModel";
import { Product } from "../domain/product";
import { ProductRepository } from "../application/productRepository";

@injectable()
export class MongoProductRepository implements ProductRepository {
  async save(data: Product): Promise<void> {
    //
  }

  async findById(id: string): Promise<any> {
    // Implementation for finding a product by ID in MongoDB
  }

  async findAll(): Promise<any[]> {
    return await ProductModel.find();
  }

  async deleteById(id: string): Promise<void> {
    // Implementation for deleting a product by ID in MongoDB
  }
}