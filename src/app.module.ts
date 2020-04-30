import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SupermarketsModule } from './supermarkets/supermarkets.module';

@Module({
  imports: [SupermarketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
