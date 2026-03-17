export class ProductCreatedEvent {
  constructor(
    public readonly productId: string,
    public readonly productName: string,
    public readonly createdAt: Date = new Date()
  ) {}
}