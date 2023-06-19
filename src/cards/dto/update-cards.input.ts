import { CreateCardInput } from './create-cards.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCardInput extends PartialType(CreateCardInput) {
  @Field(() => Int)
  id: number;
}
