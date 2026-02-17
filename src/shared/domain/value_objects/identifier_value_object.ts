import { ValueObject } from "./value_object";

export class IdentifierValueObject extends ValueObject<string> {
  constructor(value_object: string) {
    super(value_object);
    if (!this.ensureValueIsUuid(value_object)) {
      throw new Error("The value must be a valid UUID.");
    }
  }
  private ensureValueIsUuid(value_object: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value_object);
  }
}