import { Event } from '../events/Event';
  
export interface EventBus {
  publish(events: Event[]): void;
  consume(subscribers: string | '*', limit:number): Event[];
  subscribe(eventName: string, handler: any): void;
  getSubscribers(eventName: string): any[];
}