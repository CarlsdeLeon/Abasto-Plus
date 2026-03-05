import { ProductModel } from "./productModel";
import { Product } from "../domain/product";

export interface ProductRepository {
  save(product: Product): Promise<void>;
  findAll(): Promise<any[]>;
}