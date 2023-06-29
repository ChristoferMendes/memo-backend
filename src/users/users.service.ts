import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bscrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const user = await this.findByEmail(createUserInput.email);

    if (user) {
      throw new NotFoundException('User already exists');
    }

    return this.usersRepository.save({
      ...createUserInput,
      password: await bscrypt.hash(createUserInput.password, 10),
    });
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.findOne(id);

    if (!user) throw new NotFoundException('User not found');

    await this.usersRepository.update(id, updateUserInput);

    const newUser = this._injectPayloadKeys(user, updateUserInput);

    return newUser;
  }

  private _injectPayloadKeys<T>(user: User, payload: T) {
    Object.keys(payload).forEach((key) => {
      const payloadKey = payload[key];
      if (payloadKey === undefined) return;

      user[key] = payloadKey;
    });

    return user;
  }
  async remove(id: number) {
    const user = await this.findOne(id);

    if (!user) throw new NotFoundException('User not found');

    await this.usersRepository.delete(id);

    return user;
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOneBy({ email });
  }
}
