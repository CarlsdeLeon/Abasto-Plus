// types.ts
export const TYPES = {
  // Mantén tus tipos existentes
  MongoConnection: Symbol.for("MongoConnection"),
  ProductRepository: Symbol.for("ProductRepository"),
  CreateProductUseCase: Symbol.for("CreateProductUseCase"),
  
  // Añade este nuevo tipo para la abstracción
  DatabaseConnection: Symbol.for("DatabaseConnection"),
  TranslationService: Symbol.for("GoogleTranslationService"),

  // Nuevos tipos para EventBus
  EventBus: Symbol.for("EventBus"),
  NotifyBus: Symbol.for("NotifyBus"),
  NotifyCustomers: Symbol.for("NotifyCustomers"),
  ProductEventConsumer: Symbol.for("ProductEventConsumer"),
};