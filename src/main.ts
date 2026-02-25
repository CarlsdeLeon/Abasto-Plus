import dotenv from "dotenv";
import { MongoConnection } from "./catalog/product/infrastructure/mongoConnection";

dotenv.config();

async function startApp() {
  try {
    const mongo = MongoConnection.getInstance();
    await mongo.connect();

    console.log("🚀 App running...");
  } catch (error) {
    console.error("Error starting app:", error);
  }
}

startApp();