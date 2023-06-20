import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

@ObjectType()
export class AuthOutput {
  @Field(() => User)
  user: User;

  @Field()
  token: string;
}
