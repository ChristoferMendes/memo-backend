import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

export enum EnumScreen {
  Login = 'Login',
  Register = 'Register',
  Home = 'Home',
  Documents = 'Documents',
  Cards = 'Cards',
  Settings = 'Settings',
}

registerEnumType(EnumScreen, {
  name: 'EnumScreen',
});

@ObjectType()
@Entity()
export class Background extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => EnumScreen)
  @Column({ type: 'enum', enum: EnumScreen })
  screen: EnumScreen;

  @Field(() => User)
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Field()
  @Column()
  user_id: number;

  @Field()
  @Column()
  image_url: string;
}
