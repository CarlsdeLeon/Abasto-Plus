import { Product } from "../domain/product";
import { ProductRepository } from "../application/productRepository";

class MongoProductRepository implements ProductRepository {
  async save(data: Product): Promise<void> {
    // Implementation for saving a product to MongoDB
  }

  async findById(id: string): Promise<any> {
    // Implementation for finding a product by ID in MongoDB
  }

  async findAll(): Promise<any[]> {
    return []; 
  }

  async deleteById(id: string): Promise<void> {
    // Implementation for deleting a product by ID in MongoDB
  }
}