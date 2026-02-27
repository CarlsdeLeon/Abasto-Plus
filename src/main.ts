import express from "express";
import dotenv from "dotenv";
import { MongoConnection } from "./catalog/product/infrastructure/mongoConnection";
import productRoutes from "./catalog/product/infrastructure/productRoutes";

console.log("MAIN SE ESTÁ EJECUTANDO");

dotenv.config();

const app = express();
app.use(express.json()); 

app.use("/api", productRoutes); 

const PORT = 3000;

async function start() {
  await MongoConnection.getInstance().connect();

  app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}`);
  });
}

start();
