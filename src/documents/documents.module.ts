import { Module } from '@nestjs/common';
import { DocumentService } from './documents.service';
import { DocumentResolver } from './documents.resolver';

@Module({
  providers: [DocumentResolver, DocumentService],
})
export class DocumentModule {}
