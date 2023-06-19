import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CardService } from './cards.service';
import { Card } from './entities/cards.entity';
import { CreateCardInput } from './dto/create-cards.input';
import { UpdateCardInput } from './dto/update-cards.input';

@Resolver(() => Card)
export class CardResolver {
  constructor(private readonly cardService: CardService) {}

  @Mutation(() => Card)
  createCard(@Args('createCardInput') createCardInput: CreateCardInput) {
    return this.cardService.create(createCardInput);
  }

  @Query(() => [Card], { name: 'card' })
  findAll() {
    return this.cardService.findAll();
  }

  @Query(() => Card, { name: 'card' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cardService.findOne(id);
  }

  @Mutation(() => Card)
  updateCard(@Args('updateCardInput') updateCardInput: UpdateCardInput) {
    return this.cardService.update(updateCardInput.id, updateCardInput);
  }

  @Mutation(() => Card)
  removeCard(@Args('id', { type: () => Int }) id: number) {
    return this.cardService.remove(id);
  }
}
