import { EventBus } from '../interfaces/EventBus';

export class NotifyBus implements EventBus {
  private handlers: Map<string, Function[]> = new Map();

  publish(event: any): void {
    const eventName = event.constructor.name;
    console.log(`[NotifyBus] Publicando evento: ${eventName}`);
    
    const handlers = this.handlers.get(eventName) || [];
    handlers.forEach(handler => handler(event));
  }

  consume(eventName: string, callback: (data: any) => void): void {
    if (!this.handlers.has(eventName)) {
      this.handlers.set(eventName, []);
    }
    this.handlers.get(eventName)!.push(callback);
    console.log(`[NotifyBus] Suscrito a evento: ${eventName}`);
  }
}