import { Module } from '@nestjs/common';
import { SupermarketsController } from './supermarkets.controller';
import { SupermarketsService } from './supermarkets.service';

@Module({
  controllers: [SupermarketsController],
  providers: [SupermarketsService],
})
export class SupermarketsModule {}
