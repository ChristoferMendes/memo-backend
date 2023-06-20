import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthOutput } from './dto/auth.output';
import { AuthService } from './auth.service';
import { AuthInput } from './dto/auth.input';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthOutput)
  public async login(@Args('input') input: AuthInput) {
    const response = await this.authService.validateUser(input);
    const { user, token } = response;

    return {
      user,
      token,
    };
  }
}
