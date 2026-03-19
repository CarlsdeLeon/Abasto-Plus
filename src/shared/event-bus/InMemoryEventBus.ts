import { EventBus } from './interfaces/EventBus';
import { Event } from './events/Event';
import { EventHandler } from './interfaces/EventHandler';

export class InMemoryEventBus implements EventBus {
    private handlers: Map<string, EventHandler[]> = new Map();
    private eventQueue: Event[] = [];

    publish(event: Event): void {
        const eventName = event.getName();
        console.log(`[InMemoryEventBus] Publicando evento: ${eventName}`);
        
        this.eventQueue.push(event);
    }
    
    consume(eventName: string, callback: (data: any) => void): Event[] {
        const events = this.eventQueue.filter(event => event.getName() === eventName);
        //events.forEach(event => callback(event.getData()));
        return events;
    }

    getSubscribers(eventName: string): EventHandler[] {
        return this.handlers.get(eventName) || [];
    }


}