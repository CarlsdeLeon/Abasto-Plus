export interface EventHandler<T = any> {
  handle(event: T): Promise<void> | void;
  getEventName(): string;
}