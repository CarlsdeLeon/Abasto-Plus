import { ValueObject } from "./value_object";
export class EnumValueObject extends ValueObject<string> {
  constructor(value_object: string, validValues: string[]) {
    super(value_object);
        this.ensureValueisValid(value_object, validValues);
  }
  private ensureValueisValid(value_object: string, validValues: string[]): void {
    if (!validValues.includes(value_object)) {
      throw new Error(`The value must be one of the following: ${validValues.join(", ")}.`);
    }
    
  }
}
