import { PresentationId } from "./presentation/presentation_id";
import { PresentationName } from "./presentation/presentation_name";
import { PresentationType } from "./presentation/presentation_type";
import { PresentationNetQuantity } from "./presentation/presentation_net_quantity";
import { PresentationUnitOfMeasure } from "./presentation/presentation_unit_of_measure";
import { ArrayValueObject } from "../../../../shared/domain/value_objects/array_value_object";
export class Presentation extends ArrayValueObject<{id: string, name: string, type: string, net_quantity: string, unit_of_measure: string}> {
  constructor(  
    private readonly id: PresentationId,
    private readonly name: PresentationName,
    private readonly type: PresentationType,
    private readonly net_quantity: PresentationNetQuantity,
    private readonly unit_of_measure: PresentationUnitOfMeasure,
  ) {
    super([{id: id.toString(), name: name.toString(), type: type.toString(), net_quantity: net_quantity.toString(), unit_of_measure: unit_of_measure.toString()}]);
  }
//terminalo
  public static build(
    id: string,
    name: string,
    type: string,
    net_quantity: number,
    unit_of_measure: string
  ): Presentation {
    return new Presentation(
      new PresentationId(id),
      new PresentationName(name),
      new PresentationType(type),
      new PresentationNetQuantity(net_quantity),
      new PresentationUnitOfMeasure(unit_of_measure)
    );
  
  }
}