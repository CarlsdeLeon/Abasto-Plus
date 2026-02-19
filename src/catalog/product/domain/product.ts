import { ProductBaseUnit } from "./value_objects/product_base_unit";
import { ProductId } from "./value_objects/product_id";
import { ProductName } from "./value_objects/product_name";
import { Presentation } from "./entities/presentation";
export class Product {
  private constructor(  
    private readonly id: ProductId,
    private readonly name: ProductName,
    private readonly base_unit: ProductBaseUnit,
    private readonly presentation: Presentation,
  ) {
    
  }

  public static build(
    id: string,
    name: string,
    base_unit: string,
    presentation: { id: string, name: string, type: string, net_quantity: number, unit_of_measure: string }
  ): Product {
    return new Product(
      new ProductId(id),
      new ProductName(name),
      new ProductBaseUnit(base_unit),
      Presentation.build( 
        presentation.id,
        presentation.name,
        presentation.type,
        presentation.net_quantity,
        presentation.unit_of_measure
      ),
    );
  
  }
}