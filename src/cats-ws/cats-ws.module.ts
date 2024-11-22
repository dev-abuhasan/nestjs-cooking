import { Module } from '@nestjs/common';
import { CatsWsService } from './cats-ws.service';
import { CatsWsGateway } from './cats-ws.gateway';

@Module({
  providers: [CatsWsGateway, CatsWsService],
})
export class CatsWsModule {}
