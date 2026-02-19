import { ValueObject } from "./value_object";
export class ArrayValueObject<T> extends ValueObject<T[]> {
  constructor(value_object: T[]) {
    super(value_object);
  }
  private ensureValueIsArray(value_object: T[]): boolean {
    return Array.isArray(value_object);
  }
  private ensureArrayIsNotEmpty(value_object: T[]): boolean {
    return value_object.length > 0;
  }
  private ensureMaxLength(value_object: T[]): boolean {
    return value_object.length <= 5;
  }
}