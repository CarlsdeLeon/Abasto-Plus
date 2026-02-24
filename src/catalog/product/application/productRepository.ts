import { Product } from "../domain/product";

export interface ProductRepository {
  save(data: Product): Promise<void>;
  findById(id: string): Promise<any>;
  findAll(): Promise<any[]>;
  deleteById(id: string): Promise<void>;
}