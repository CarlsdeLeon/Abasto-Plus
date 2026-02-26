import { Router } from "express";
import { Product } from "../domain/product";
import { SaveProduct } from "../application/use-cases/save-product";
import { MongoProductRepository } from "./mongoProductRepository";

const router = Router();
const repository = new MongoProductRepository();

router.get("/test", (req, res) => {
  console.log("ENTRÓ A TEST");
  res.json({ ok: true });
});

router.post("/products", async (req, res) => {
  console.log("ENTRÓ AL POST /products");
  try {
    const product = Product.build(
      req.body.id,
      req.body.name,
      req.body.base_unit,
      req.body.presentation
    );

    await new SaveProduct(repository).execute(product);

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
  const products = await repository.findAll();
  res.json(products);
});

export default router;