import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BackgroundsService } from './backgrounds.service';
import { Background } from './entities/background.entity';
import { CreateBackgroundInput } from './dto/create-background.input';
import { UpdateBackgroundInput } from './dto/update-background.input';

@Resolver(() => Background)
export class BackgroundsResolver {
  constructor(private readonly backgroundsService: BackgroundsService) {}

  @Mutation(() => Background)
  createBackground(@Args('createBackgroundInput') createBackgroundInput: CreateBackgroundInput) {
    return this.backgroundsService.create(createBackgroundInput);
  }

  @Query(() => [Background], { name: 'backgrounds' })
  findAll() {
    return this.backgroundsService.findAll();
  }

  @Query(() => Background, { name: 'background' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.backgroundsService.findOne(id);
  }

  @Mutation(() => Background)
  updateBackground(@Args('updateBackgroundInput') updateBackgroundInput: UpdateBackgroundInput) {
    return this.backgroundsService.update(updateBackgroundInput.id, updateBackgroundInput);
  }

  @Mutation(() => Background)
  removeBackground(@Args('id', { type: () => Int }) id: number) {
    return this.backgroundsService.remove(id);
  }
}
