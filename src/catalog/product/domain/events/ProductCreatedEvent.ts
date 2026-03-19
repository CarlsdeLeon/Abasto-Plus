import { Event } from '../../../../shared/event-bus/events/Event';

export class ProductCreatedEvent extends Event {
  constructor(
    public readonly productId: string,
    public readonly productName: string,
    public readonly createdAt: Date = new Date()
  ) {
    super('catalog.ProductCreated', { 'id': productId, 'name': productName, 'createdAt': createdAt });
  }
}