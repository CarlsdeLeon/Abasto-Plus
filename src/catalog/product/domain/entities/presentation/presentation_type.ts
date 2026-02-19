import { EnumValueObject } from "../../../../../shared/domain/value_objects/enum_value_object";
export class PresentationType extends EnumValueObject {
  constructor(value_object: string) {
    const validUnits = ["bag", "sack", "box", "can", "jar", "bottle"];
    super(value_object, validUnits);
  }
}