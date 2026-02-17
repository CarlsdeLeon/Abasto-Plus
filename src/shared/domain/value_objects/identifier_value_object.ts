import { ValueObject } from "./value_object";

export class IdentifierValueObject extends ValueObject<string> {
  constructor(value_object: string) {
    super(value_object);
  }
  private ensureValueIsUuid(value_object: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(value_object);
  }
}