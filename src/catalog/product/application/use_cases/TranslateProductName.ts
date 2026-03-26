import { inject } from "inversify";
import { Product } from "../../domain/product";
import { ProductRepository } from "../productRepository";
import { TYPES } from "../../../../../types";

import { ProductCreatedEvent } from "../../domain/events/ProductCreatedEvent";

import { TranslationService } from "../ports/translationService";


export class TranslateProductName {
    constructor(
        @inject(TYPES.ProductRepository)
        private readonly repository: ProductRepository,
        @inject(TYPES.TranslationService)private readonly translator: TranslationService,
        private readonly targetLanguage: string = 'en'       
    ) {}

    subscribedTo(): string[] {
        return ['catalog.product.created'];
    }

    async on(event: ProductCreatedEvent): Promise<void> {
        const product:Product = await this.repository.findById(event.payload.id);
        if (!product) {
            throw new Error(`Producto con ID ${event.payload.id} no encontrado`);
        }

        const translatedName = await this.translator.translate(product.name.toString(), this.targetLanguage);
        product.name = translatedName;

        await this.repository.update(product);
    }

}