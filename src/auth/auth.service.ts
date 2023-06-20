import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthOutput } from './dto/auth.output';
import { compareSync } from 'bcrypt';
import { AuthInput } from './dto/auth.input';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(authInput: AuthInput): Promise<AuthOutput> {
    const user = await this.userService.findByEmail(authInput.email);

    const validPassword = compareSync(authInput.password, user.password);

    if (!validPassword) {
      throw new UnauthorizedException('Invalid password');
    }

    const token = await this._jwtToken(user);

    return {
      user,
      token,
    };
  }

  private async _jwtToken(user: User) {
    const payload = { username: user.name, sub: user.id };

    return this.jwtService.sign(payload, {
      privateKey: process.env.JWT_SECRET,
    });
  }
}
