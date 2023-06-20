import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { ObjectType, Field, ID } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
@Entity()
export class Card extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => User)
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Field()
  @Column()
  user_id: number;

  @Field()
  @Column()
  card_number: string;

  @Field()
  @Column()
  expiration_date: Date;

  @Field()
  @Column()
  cvv: number;

  @Field()
  @Column()
  created_at: Date;
}
