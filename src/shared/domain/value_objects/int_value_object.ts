import { ValueObject } from "./value_object";
export class IntValueObject extends ValueObject<number> {
  constructor(value_object: number) {
    super(value_object);
  }
  private ensureIsInteger(value: number): void {
    if (!Number.isInteger(value)) {
      throw new Error("The value must be an integer.");
    }
    
  }
}