import { Event } from '../../../../shared/event-bus/events/Event';

export class ProductCreatedEvent extends Event {
  constructor(
    private readonly productId: string,
    private readonly productName: string,
    private readonly createdAt: Date = new Date(), 
  ) {
    super('catalog.product.created', { 'id': productId, 'name': productName, 'createdAt': createdAt });
  }
}