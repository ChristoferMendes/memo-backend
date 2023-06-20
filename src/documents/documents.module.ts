import { Module } from '@nestjs/common';
import { DocumentService } from './documents.service';
import { DocumentResolver } from './documents.resolver';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Document } from './entities/documents.entity';

@Module({
  providers: [DocumentResolver, DocumentService, UsersService],
  imports: [TypeOrmModule.forFeature([Document]), UsersModule],
})
export class DocumentModule {}
