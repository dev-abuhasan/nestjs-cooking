import { Module } from '@nestjs/common';
import { CatsMsService } from './cats-ms.service';
import { CatsMsController } from './cats-ms.controller';

@Module({
  controllers: [CatsMsController],
  providers: [CatsMsService],
})
export class CatsMsModule {}
