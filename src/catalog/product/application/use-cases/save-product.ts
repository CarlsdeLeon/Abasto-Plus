import { ProductRepository } from '../productRepository';

export class SaveProduct {
    constructor(private readonly productRepository: ProductRepository) {}

    async execute(product: any): Promise<void> {
        await this.productRepository.save(product);
    }
}