import { ProductBaseUnit } from "./value_objects/product_base_unit";
import { ProductId } from "./value_objects/product_id";
import { ProductName } from "./value_objects/product_name";
export class Product {
  constructor(  
    public readonly id: ProductId,
    public readonly name: ProductName,
    public readonly base_unit: ProductBaseUnit,
  ) {}

}