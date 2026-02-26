import { Product } from "../domain/product";
import { ProductRepository } from "../application/productRepository";
import { ProductModel } from "./productModel";

export class MongoProductRepository implements ProductRepository {
  async save(data: Product): Promise<void> {
    // Implementation for saving a product to MongoDB
    await ProductModel.create(data.toPrimitives() as any);
  }

  async findById(id: string): Promise<any> {
    // Implementation for finding a product by ID in MongoDB
    return await ProductModel.findById(id);
  }

  async findAll(): Promise<any[]> {
    return await ProductModel.find({});
  }

  async deleteById(id: string): Promise<void> {
    // Implementation for deleting a product by ID in MongoDB'
    await ProductModel.findByIdAndDelete(id);
  }
}