import { IdentifierValueObject } from "../../../../shared/domain/value_objects/identifier_value_object"; 
export class ProductId extends IdentifierValueObject {
  constructor(value_object: string, ) {
    super(value_object);
  }
}