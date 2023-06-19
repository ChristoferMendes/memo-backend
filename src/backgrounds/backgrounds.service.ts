import { Injectable } from '@nestjs/common';
import { CreateBackgroundInput } from './dto/create-background.input';
import { UpdateBackgroundInput } from './dto/update-background.input';

@Injectable()
export class BackgroundsService {
  create(createBackgroundInput: CreateBackgroundInput) {
    return 'This action adds a new background';
  }

  findAll() {
    return `This action returns all backgrounds`;
  }

  findOne(id: number) {
    return `This action returns a #${id} background`;
  }

  update(id: number, updateBackgroundInput: UpdateBackgroundInput) {
    return `This action updates a #${id} background`;
  }

  remove(id: number) {
    return `This action removes a #${id} background`;
  }
}
