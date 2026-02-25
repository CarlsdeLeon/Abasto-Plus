import mongoose from "mongoose";

const PresentationSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  net_quantity: Number,
  unit_of_measure: String,
});

const ProductSchema = new mongoose.Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    base_unit: { type: String, required: true },
    presentation: { type: PresentationSchema, required: true },
  },
  {
    collection: "Producto",
  }
);

export const ProductModel = mongoose.model("Producto", ProductSchema);