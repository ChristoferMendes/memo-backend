import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Document } from 'src/documents/entities/documents.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column({ unique: true })
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @OneToMany(() => Document, (document) => document.user, {
    onDelete: 'CASCADE',
  })
  documents: Document[];
}
