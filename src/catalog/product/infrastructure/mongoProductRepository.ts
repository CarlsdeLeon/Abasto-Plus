import { injectable } from "inversify";
import { ProductModel } from "./productModel";
import { Product } from "../domain/product";
import { ProductRepository } from "../application/productRepository";

@injectable()
export class MongoProductRepository implements ProductRepository {
  async save(data: Product): Promise<void> {
    // 
    await ProductModel.create(data.toPrimitives() as any);
    console.log("Saving product to MongoDB:", data);
  }

  async findById(id: string): Promise<any> {
    // Implementation for finding a product by ID in MongoDB
    const productData = await ProductModel.findOne({ id: id });
    if (!productData) {
      return null;
    }
    return Product.fromPrimitives(productData);
  }

  async findAll(): Promise<any[]> {
    return await ProductModel.find();
  }

  async update(product: Product): Promise<void> {
    await ProductModel.updateOne({ id: product.toPrimitives().id }, product.toPrimitives() as any);
  }

  async deleteById(id: string): Promise<void> {
    // Implementation for deleting a product by ID in MongoDB
    await ProductModel.deleteMany({ id: id });
  }
}