import { EventBus } from '../interfaces/EventBus';

export class NotifyCustomers implements EventBus {
  private subscriptions: Map<string, Function[]> = new Map();

  publish(event: any): void {
    const eventName = event.constructor.name;
    console.log(`[NotifyCustomers] Notificando a clientes sobre: ${eventName}`);
    
    const subscribers = this.subscriptions.get(eventName) || [];
    subscribers.forEach(subscriber => subscriber(event));
  }

  consume(eventName: string, callback: (data: any) => void): void {
    if (!this.subscriptions.has(eventName)) {
      this.subscriptions.set(eventName, []);
    }
    this.subscriptions.get(eventName)!.push(callback);
    console.log(`[NotifyCustomers] Cliente suscrito a: ${eventName}`);
  }
}