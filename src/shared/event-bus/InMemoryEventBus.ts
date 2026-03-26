import { EventBus } from './interfaces/EventBus';
import { Event } from './events/Event';
import { injectable } from 'inversify';

@injectable()
export class InMemoryEventBus implements EventBus {
    static instance: InMemoryEventBus;
    private eventQueue: Event[] = [];
    private _subscribers: { [eventName: string]: any[] } = {
            '*': []
    };

    constructor() {
        if (!InMemoryEventBus.instance) {
            InMemoryEventBus.instance = this;
        }
        return InMemoryEventBus.instance;
    }

    publish(events: Event[]): void {
        events.forEach(event => {
            const eventName = event.name;
            console.log(`[InMemoryEventBus] Publicando evento: ${eventName}`);
            this.eventQueue.push(event);
        });
    }
    
    consume(event_name: string|'*', limit: number): Event[] {
        let events: Event[];
        if (event_name === '*') {
            events = this.eventQueue;
        } else {
            events = this.eventQueue.filter(event => event_name.includes(event.name));    
        }
        events = events.slice(0, limit);
        this.eventQueue = this.eventQueue.filter(event => !event_name.includes(event.name));

        return events;
    }

    subscribe(eventName: string, handler: any): void {
        if (!this._subscribers[eventName]) {
            this._subscribers[eventName] = [];
        }
        this._subscribers['*']?.push(handler);
        this._subscribers[eventName].push(handler);
    }

    getSubscribers(eventName: string): any[] {
        return this._subscribers[eventName] || [];
    }

}