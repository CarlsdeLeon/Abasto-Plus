export class ValueObject<T> {
  constructor(public readonly value_object: T) {
  }

  public value(): T {
    return this.value_object;
  }
}