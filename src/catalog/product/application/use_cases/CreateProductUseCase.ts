import { injectable, inject } from "inversify";
import { Product } from "../../domain/product";
import { ProductRepository } from "../productRepository";
import { TYPES } from "../../../../../types";

import { EventBus } from "../../../../shared/event-bus/interfaces/EventBus";
import { ProductCreatedEvent } from "../../domain/events/ProductCreatedEvent";

import { TranslateProductName } from "./TranslateProductName";
import { container } from "../../infrastructure/inversify.config";

@injectable()
export class CreateProductUseCase {

  constructor(
    @inject(TYPES.EventBus)
    private readonly eventBus: EventBus, // Cambia 'any' por la interfaz correcta de tu EventBus
    @inject(TYPES.ProductRepository)
    private readonly repository: ProductRepository,
  
  ) {}

  async execute(
    data: any
  ): Promise<void> {
    console.log("Repo ", this.repository);
    console.log("Creating product:", data);

    const product = Product.build(
      data.id,
      data.name,
      data.base_unit,
      data.presentation
    );

    this.eventBus.publish([
      new ProductCreatedEvent(
        data.id,
        data.name
      )
    ]);

    this.eventBus.subscribe('catalog.product.created', new TranslateProductName(this.repository, container.get(TYPES.TranslationService)));


    await this.repository.save(product);
  }
}