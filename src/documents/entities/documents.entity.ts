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
export class Document extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => User)
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Field(() => String)
  @Column()
  user_id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  image_url: string;

  @Field()
  @Column({ default: () => 'now()' })
  created_at: Date;

  @Field()
  @Column({ default: () => 'now()' })
  updated_at: Date;
}
