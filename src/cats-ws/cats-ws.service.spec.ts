import { Test, TestingModule } from '@nestjs/testing';
import { CatsWsService } from './cats-ws.service';

describe('CatsWsService', () => {
  let service: CatsWsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsWsService],
    }).compile();

    service = module.get<CatsWsService>(CatsWsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
