import { Test, TestingModule } from '@nestjs/testing';
import { CatsWsGateway } from './cats-ws.gateway';
import { CatsWsService } from './cats-ws.service';

describe('CatsWsGateway', () => {
  let gateway: CatsWsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsWsGateway, CatsWsService],
    }).compile();

    gateway = module.get<CatsWsGateway>(CatsWsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
