import { EnumValueObject } from "../../../../../shared/domain/value_objects/enum_value_object";
export class PresentationUnitOfMeasure extends EnumValueObject {
  constructor(value_object: string) {
    const validUnits = ["kg", "g", "lb", "ml", "lt", "unit"];
    super(value_object, validUnits);
  }
  public toString(): string {
    return this.value_object;
  }
}