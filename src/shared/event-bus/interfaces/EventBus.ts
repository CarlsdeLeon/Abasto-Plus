import { Event } from '../events/Event';
import { EventHandler } from './EventHandler';
  
export interface EventBus {
  publish(event: Event): void;
  consume(eventName: string, callback: (data: any) => void): Event[];
  getSubscribers(eventName: string): EventHandler[];
}