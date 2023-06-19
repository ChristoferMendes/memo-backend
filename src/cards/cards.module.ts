import { Module } from '@nestjs/common';
import { CardService } from './cards.service';
import { CardResolver } from './cards.resolver';

@Module({
  providers: [CardResolver, CardService],
})
export class CardModule {}
