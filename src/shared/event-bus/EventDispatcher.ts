import { Event } from './events/Event';
import { EventHandler } from './interfaces/EventHandler';

export class EventDispatcher {
    private handlers: Map<string, EventHandler[]> = new Map();

    registerHandler(handler: EventHandler): void {
        const eventName = handler.getEventName();
        if (!this.handlers.has(eventName)) {
            this.handlers.set(eventName, []);
        }
        this.handlers.get(eventName)!.push(handler);
    }

    async dispatch(event: Event): Promise<void> {
        const eventName = event.getName();
        const handlers = this.handlers.get(eventName) || [];
        
        const promises = handlers.map(handler => handler.handle(event));
        await Promise.all(promises);
    }
}