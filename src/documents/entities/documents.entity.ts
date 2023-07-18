import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from 'typeorm';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

export enum DocumentTypeEnum {
  CPF = 'CPF',
  RG = 'RG',
  CNH = 'CNH',
  PASSPORT = 'PASSPORT',
  VACCINE = 'VACCINE',
  ID = 'ID',
  OTHER = 'OTHER',
}

registerEnumType(DocumentTypeEnum, {
  name: 'DocumentTypeEnum',
  description: 'Document types',
});

@Entity()
@ObjectType()
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

  @Field(() => DocumentTypeEnum)
  @Column({
    type: 'enum',
    enum: DocumentTypeEnum,
  })
  type: `${DocumentTypeEnum}`;
}
