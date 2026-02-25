import { ProductModel } from "./productModel";
import { Product } from "../domain/product";

export class ProductRepository {

  async save(product: Product): Promise<void> {
    await ProductModel.create(product.toPrimitives() as any);
  }

  async findAll() {
    return await ProductModel.find();
  }
}