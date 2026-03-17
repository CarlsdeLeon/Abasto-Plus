import { Event } from '../events/Event';
  
export interface EventBus {
  publish(event: Event): void;
  consume(eventName: string, callback: (data: any) => void): Event[];
}