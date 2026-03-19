import { EventHandler } from '../../../shared/event-bus/interfaces/EventHandler';
import { Event } from '../../../shared/event-bus/events/Event';

export class SendNotificationHandler implements EventHandler {
  getEventName(): string {
    return 'catalog.product_created';
  }

  async handle(event: Event): Promise<void> {
    const productData = event.getData();
    console.log(`[SendNotification] Enviando notificación push sobre: ${productData.name}`);
  }
}