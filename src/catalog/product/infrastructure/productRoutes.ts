import { Router } from "express";
import { container } from "./inversify.config";
import { TYPES } from "../../../../types";
import { CreateProductUseCase } from "../application/use_cases/CreateProductUseCase";
import { MongoProductRepository } from "./mongoProductRepository";

const router = Router();

router.get("/test", (req, res) => {
  console.log("ENTRÓ A TEST");
  res.json({ ok: true });
});

router.post("/products", async (req, res) => {
  console.log("ENTRÓ AL POST /products");
  try {
    const createProductUseCase = container.get<CreateProductUseCase>(TYPES.CreateProductUseCase);
    
    await createProductUseCase.execute(req.body);
    
    res.status(201).json({ message: "Product saved successfully" });
  } catch (error: any) {
    console.error("ERROR REAL:", error);
    res.status(400).json({ 
      message: error.message,
      stack: error.stack 
    });
  }
});

router.get("/products", async (req, res) => {
  try {
    const repository = container.get<MongoProductRepository>(TYPES.ProductRepository);
    const products = await repository.findAll();
    res.json(products);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/products", async (req, res) => {
  try {
    const repository = container.get<MongoProductRepository>(TYPES.ProductRepository);
    await repository.deleteById(req.body.id);
    res.json({ message: "Product deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});


export default router;