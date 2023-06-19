import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { BackgroundsModule } from './backgrounds/backgrounds.module';
import { DocumentModule } from './documents/documents.module';
import { CardModule } from './cards/cards.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    BackgroundsModule,
    DocumentModule,
    CardModule,
  ],
})
export class AppModule {}
