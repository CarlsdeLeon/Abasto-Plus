import { Event } from './Event';

export class ProductCreatedEvent extends Event {
  constructor(
    public readonly productId: string,
    public readonly productName: string,
    public readonly createdAt: Date = new Date()
  ) {
    super('ProductCreated', { 'id': productId, 'name': productName, 'createdAt': createdAt });
  }
}