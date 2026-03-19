import { Event } from './shared/event-bus/events/Event';
import { InMemoryEventBus } from './shared/event-bus/InMemoryEventBus';
import { EventDispatcher } from './shared/event-bus/EventDispatcher';
import { NotifyBossHandler } from './shared/event-bus/handlers/NotifyBossHandler';
import { SendSmsToCustomersHandler } from './shared/event-bus/handlers/SendSmsToCustomersHandler';
import { SendNotificationHandler } from './shared/event-bus/handlers/SendNotificationHandler';
import { NotifyBus } from './shared/event-bus/implementations/NotifyBus';
import { NotifyCustomers } from './shared/event-bus/implementations/NotifyCustomers';

export class MainConsumer {
  private queue1: Event[] = []; // Cola para product-created y sus derivados
  private queue2: Event[] = []; // Cola para shop.sale-create
  private queue3: Event[] = []; // Cola para retention.user_created
  
  private eventDispatcher: EventDispatcher;
  private inMemoryBus: InMemoryEventBus;
  private notifyBus: NotifyBus;
  private notifyCustomers: NotifyCustomers;

  constructor() {
    this.eventDispatcher = new EventDispatcher();
    this.inMemoryBus = new InMemoryEventBus();
    this.notifyBus = new NotifyBus();
    this.notifyCustomers = new NotifyCustomers();
    
    this.registerHandlers();
    this.setupSubscriptions();
  }

  private registerHandlers(): void {
    // Registrar handlers para product-created (todos van a queue1)
    this.eventDispatcher.registerHandler(new NotifyBossHandler());
    this.eventDispatcher.registerHandler(new SendSmsToCustomersHandler());
    this.eventDispatcher.registerHandler(new SendNotificationHandler());
  }

  private setupSubscriptions(): void {
    // Configurar suscripciones para diferentes buses si es necesario
    this.notifyBus.consume('catalog.product_created', (data) => {
      console.log('[NotifyBus] Procesando producto creado:', data);
    });

    this.notifyCustomers.consume('catalog.product_created', (data) => {
      console.log('[NotifyCustomers] Notificando a clientes:', data);
    });
  }

  // Método para recibir eventos (simula la llegada de mensajes)
  async receiveEvent(event: Event): Promise<void> {
    const eventName = event.getName();
    
    // Enrutar a la cola correspondiente
    switch(eventName) {
      case 'catalog.product_created':
        this.queue1.push(event);
        console.log(`[MainConsumer] Evento ${eventName} encolado en Queue 1`);
        break;
        
      case 'shop.sale-create':
        this.queue2.push(event);
        console.log(`[MainConsumer] Evento ${eventName} encolado en Queue 2`);
        break;
        
      case 'retention.user_created':
        this.queue3.push(event);
        console.log(`[MainConsumer] Evento ${eventName} encolado en Queue 3`);
        break;
        
      default:
        console.log(`[MainConsumer] Evento desconocido: ${eventName}`);
    }
  }

  // Procesar Queue 1 (product-created y sus derivados)
  async processQueue1(): Promise<void> {
    console.log('[MainConsumer] Procesando Queue 1...');
    
    while (this.queue1.length > 0) {
      const event = this.queue1.shift()!;
      
      // Publicar en diferentes buses si es necesario
      this.inMemoryBus.publish(event);
      this.notifyBus.publish(event);
      this.notifyCustomers.publish(event);
      
      // Despachar a los handlers específicos (notify-boss, send-sms, send-notification)
      await this.eventDispatcher.dispatch(event);
      
      console.log(`[MainConsumer] Queue 1: Evento ${event.getName()} procesado completamente`);
    }
  }

  // Procesar Queue 2 (shop.sale-create)
  async processQueue2(): Promise<void> {
    console.log('[MainConsumer] Procesando Queue 2...');
    
    while (this.queue2.length > 0) {
      const event = this.queue2.shift()!;
      
      // Lógica específica para ventas
      console.log(`[MainConsumer] Procesando venta: ${JSON.stringify(event.getData())}`);
      
      // await this.saleUseCase.execute(event.getData());
      
      // Publicar en buses si es necesario
      this.inMemoryBus.publish(event);
    }
  }

  // Procesar Queue 3 (retention.user_created)
  async processQueue3(): Promise<void> {
    console.log('[MainConsumer] Procesando Queue 3...');
    
    while (this.queue3.length > 0) {
      const event = this.queue3.shift()!;
      
      // Lógica específica para retención de usuarios
      console.log(`[MainConsumer] Procesando usuario para retención: ${JSON.stringify(event.getData())}`);
      
      // await this.retentionUseCase.execute(event.getData());
    }
  }

  // Procesar todas las colas
  async processAllQueues(): Promise<void> {
    await this.processQueue1();
    await this.processQueue2();
    await this.processQueue3();
  }

  // Iniciar el consumidor con polling
  start(intervalMs: number = 1000): void {
    console.log('[MainConsumer] Iniciado con intervalo de', intervalMs, 'ms');
    
    setInterval(async () => {
      await this.processAllQueues();
    }, intervalMs);
  }
}