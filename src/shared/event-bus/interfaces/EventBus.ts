export interface EventBus {
  publish(event: any): void;
  consume(eventName: string, callback: (data: any) => void): void;
}