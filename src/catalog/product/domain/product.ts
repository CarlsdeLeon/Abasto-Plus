import { ProductBaseUnit } from "./value_objects/product_base_unit";
import { ProductId } from "./value_objects/product_id";
import { ProductName } from "./value_objects/product_name";
export class Product {
  constructor(  
    private readonly id: ProductId,
    private readonly name: ProductName,
    private readonly base_unit: ProductBaseUnit,
  ) {}

  public static build(
    id: string,
    name: string,
    base_unit: string
  ): Product {
    return new Product(
      new ProductId(id),
      new ProductName(name),
      new ProductBaseUnit(base_unit)
    );
  
  }
}