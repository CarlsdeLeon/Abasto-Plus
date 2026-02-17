import { EnumValueObject } from "../../../../shared/domain/value_objects/enum_value_object";
export class ProductBaseUnit extends EnumValueObject {
  constructor(value_object: string) {
    const validUnits = ["kg", "lb", "oz"];
    super(value_object, validUnits);
  }
}