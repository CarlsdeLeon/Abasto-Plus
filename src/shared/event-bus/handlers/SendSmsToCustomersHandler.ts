import { EventHandler } from '../../../shared/event-bus/interfaces/EventHandler';
import { Event } from '../../../shared/event-bus/events/Event';

export class SendSmsToCustomersHandler implements EventHandler {
  getEventName(): string {
    return 'catalog.product_created';
  }

  async handle(event: Event): Promise<void> {
    const productData = event.getData();
    console.log(`[SendSmsToCustomers] Enviando SMS a clientes sobre nuevo producto: ${productData.name}`);
  }
}