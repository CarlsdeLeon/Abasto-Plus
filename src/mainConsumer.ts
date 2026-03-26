import { inject } from "inversify";
import { TYPES } from "../types";
import { EventBus } from "./shared/event-bus/interfaces/EventBus";
import { TranslateProductName } from "./catalog/product/application/use_cases/TranslateProductName";

export class MainConsumer {
  constructor(
    @inject(TYPES.EventBus) 
    private readonly eventBus: EventBus
  ) {}


  async consume() {
    
    const events = this.eventBus.consume('catalog.product.created', 2);
    const subscribers = this.eventBus.getSubscribers('catalog.product.created');
    console.log(`Eventos a consumir: ${events.length}`);
    console.log(`Suscriptores encontrados: ${subscribers.length}`);
    for (const event of events) {
      for (const subscriber of subscribers) {
        console.log(`Ejecutando suscriptor para evento: ${event.name}`);
        await subscriber.on(event);
      }
    }
  }

}