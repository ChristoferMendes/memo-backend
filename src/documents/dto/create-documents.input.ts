import { InputType, ID, Field } from '@nestjs/graphql';
@InputType()
export class CreateDocumentInput {
  @Field(() => Number)
  user_id: number;

  @Field()
  title: string;

  @Field()
  image_url: string;
}
