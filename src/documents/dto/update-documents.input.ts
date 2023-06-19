import { CreateDocumentInput } from './create-documents.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDocumentInput extends PartialType(CreateDocumentInput) {
  @Field(() => Int)
  id: number;
}
