import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NestFileModule } from '@epic-hey/nest-file';

@Module({
  imports: [NestFileModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
