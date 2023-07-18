import { InputType, Field } from '@nestjs/graphql';
import { DocumentTypeEnum } from '../entities/documents.entity';
@InputType()
export class CreateDocumentInput {
  @Field(() => Number)
  user_id: number;

  @Field()
  title: string;

  @Field()
  image_url: string;

  @Field(() => DocumentTypeEnum)
  type: `${DocumentTypeEnum}`;
}
