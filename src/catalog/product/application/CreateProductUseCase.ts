import { injectable, inject } from "inversify";
import { Product } from "../domain/product";
import { ProductRepository } from "../application/productRepository";
import { TYPES } from "../../../../types";

@injectable()
export class CreateProductUseCase {

  constructor(
    @inject(TYPES.ProductRepository)
    private readonly repository: ProductRepository
  ) {}

  async execute(data: any): Promise<void> {
    const product = Product.build(
      data.id,
      data.name,
      data.base_unit,
      data.presentation
    );

    await this.repository.save(product);
  }
}