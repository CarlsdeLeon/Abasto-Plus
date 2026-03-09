// main.ts
import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import { container } from "./catalog/product/infrastructure/inversify.config";
import { TYPES } from "../types";
import { DatabaseConnection } from "./catalog/product/infrastructure/database-connection.interface";
import productRoutes from "./catalog/product/infrastructure/productRoutes";

console.log("🚀 EL ARCHIVO PRINCIPAL SE ESTÁ EJECUTANDO");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", productRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    // Obtén la conexión a través de la interfaz, no de la implementación concreta
    const databaseConnection = container.get<DatabaseConnection>(TYPES.DatabaseConnection);
    await databaseConnection.connect();
    
    app.listen(PORT, () => {
      console.log(`✅ Servidor escuchando en http://localhost:${PORT}`);
      console.log(`📝 Endpoints disponibles:`);
      console.log(`   POST http://localhost:${PORT}/api/products`);
      console.log(`   GET  http://localhost:${PORT}/api/products`);
      console.log(`   GET  http://localhost:${PORT}/api/test`);
    });
  } catch (error) {
    console.error("❌ Error iniciando el servidor:", error);
    process.exit(1);
  }
}

// Iniciar la aplicación
start();

// Gestionar cierre del servidor de forma segura
process.on('SIGINT', async () => {
  console.log('\n🛑 Deteniendo servidor...');
  try {
    const databaseConnection = container.get<DatabaseConnection>(TYPES.DatabaseConnection);
    await databaseConnection.disconnect();
    console.log('👋 Conexión a MongoDB cerrada');
    process.exit(0);
  } catch (error) {
    console.error('Error durante el cierre:', error);
    process.exit(1);
  }
});