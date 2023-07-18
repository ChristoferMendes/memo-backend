import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocumentInput } from './dto/create-documents.input';
import { UpdateDocumentInput } from './dto/update-documents.input';
import { UsersService } from 'src/users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Document } from './entities/documents.entity';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
    private readonly userService: UsersService,
  ) {}

  create(createDocumentInput: CreateDocumentInput) {
    return this.documentRepository.save(createDocumentInput);
  }

  async findAll() {
    const documents = await this.documentRepository.find();

    return documents;
  }

  findOne(id: number) {
    return this.documentRepository.findOneBy({ id });
  }

  update(id: number, updateDocumentInput: UpdateDocumentInput) {
    return this.documentRepository.update(id, updateDocumentInput);
  }

  async remove(id: number) {
    const document = await this.findOne(id);

    if (!document) {
      throw new NotFoundException('Document not found');
    }

    await this.documentRepository.delete(id);

    return document;
  }
}
