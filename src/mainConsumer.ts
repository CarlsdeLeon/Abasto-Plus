import { Event } from "./shared/event-bus/events/Event";
import { InMemoryEventBus } from "./shared/event-bus/InMemoryEventBus";

export class Consumer {
    private eventBus: InMemoryEventBus;
    
    constructor(eventBus: InMemoryEventBus) {
        this.eventBus = eventBus;
    }

    start() {
        console.log("[Consumer] Iniciando consumidor...");
        setInterval(() => {
            const events = this.eventBus.consume('catalog.ProductCreated', (data) => {
                console.log(`[Consumer] Evento consumido: ${JSON.stringify(data)}`);
            });
            events.forEach(event => {
                console.log(`[Consumer] Evento consumido: ${JSON.stringify(event.getData())}`);
            });
        }, 5000);
    }
}