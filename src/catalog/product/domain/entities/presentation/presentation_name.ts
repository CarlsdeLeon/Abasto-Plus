import { StringValueObject } from "../../../../../shared/domain/value_objects/string_value_object";
export class PresentationName extends StringValueObject {
  constructor(value_object: string) {
    super(value_object);
  }
  public verifyLength(): boolean {
    return this.value_object.length > 10;
  }
}