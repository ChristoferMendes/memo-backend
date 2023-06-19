import { Module } from '@nestjs/common';
import { BackgroundsService } from './backgrounds.service';
import { BackgroundsResolver } from './backgrounds.resolver';

@Module({
  providers: [BackgroundsResolver, BackgroundsService]
})
export class BackgroundsModule {}
