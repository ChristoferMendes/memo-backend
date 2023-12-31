import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { DocumentService } from './documents.service';
import { Document } from './entities/documents.entity';
import { CreateDocumentInput } from './dto/create-documents.input';
import { UpdateDocumentInput } from './dto/update-documents.input';
import { UsersService } from 'src/users/users.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Resolver(() => Document)
export class DocumentResolver {
  constructor(
    private readonly documentService: DocumentService,
    private readonly userService: UsersService,
  ) {}

  @Mutation(() => Document)
  createDocument(
    @Args('createDocumentInput') createDocumentInput: CreateDocumentInput,
  ) {
    return this.documentService.create(createDocumentInput);
  }

  @Query(() => [Document], { name: 'documents' })
  findAll() {
    return this.documentService.findAll();
  }

  @Query(() => Document, { name: 'document' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.documentService.findOne(id);
  }

  @Mutation(() => Document)
  updateDocument(
    @Args('updateDocumentInput') updateDocumentInput: UpdateDocumentInput,
  ) {
    return this.documentService.update(
      updateDocumentInput.id,
      updateDocumentInput,
    );
  }

  @Mutation(() => Document)
  removeDocument(@Args('id', { type: () => Int }) id: number) {
    return this.documentService.remove(id);
  }

  @Query(() => [Document], { name: 'documentsByUser' })
  async findDocumentsByUser(@Args('user_id') user_id: number) {
    return this.documentService.findDocumentsByUser(user_id);
  }

  @ResolveField()
  async user(@Parent() document: Document) {
    return this.userService.findOne(document.user_id);
  }
}
