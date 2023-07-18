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

  async create(createDocumentInput: CreateDocumentInput) {
    console.log('reached');
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

  async findDocumentsByUser(user_id: number) {
    const user = await this.userService.findOne(user_id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const documents = await this.documentRepository.find({
      where: { user_id },
    });

    return documents;
  }
}
