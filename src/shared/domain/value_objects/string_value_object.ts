import { ValueObject } from "./value_object";
export class StringValueObject extends ValueObject<string> {
  constructor(value_object: string) {
    super(value_object);
  }
  public toString(): string {
    return this.value_object.toString();
  }
    
  }
