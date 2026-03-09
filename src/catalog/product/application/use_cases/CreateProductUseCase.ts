import { injectable, inject } from "inversify";
import { Product } from "../../domain/product";
import { ProductRepository } from "../productRepository";
import { TYPES } from "../../../../../types";

import { TranslationService } from "../ports/translationService";

@injectable()
export class CreateProductUseCase {

  constructor(
    @inject(TYPES.ProductRepository)
    private readonly repository: ProductRepository,
    @inject(TYPES.TranslationService) private readonly translator: TranslationService
  
  ) {}

  async execute(
    data: any
  ): Promise<void> {
    console.log("Repo ", this.repository);
    console.log("Creating product:", data);

    const product = Product.build(
      data.id,
      await this.translator.translate(data.name, "en"),
      data.base_unit,
      data.presentation
    );



    await this.repository.save(product);
  }
}