import { ValueObject } from "./value_object";
import { validate, version } from "uuid";

export class IdentifierValueObject extends ValueObject<string> {
  constructor(value_object: string) {
    super(value_object);
    if (!this.ensureValueIsUuid(value_object)) {
      throw new Error("The value must be a valid UUID.");
    }
  }
  private ensureValueIsUuid(value_object: string): boolean {
    return validate(value_object);
  }
}