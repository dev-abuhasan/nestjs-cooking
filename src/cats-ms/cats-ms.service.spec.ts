import { Test, TestingModule } from '@nestjs/testing';
import { CatsMsService } from './cats-ms.service';

describe('CatsMsService', () => {
  let service: CatsMsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsMsService],
    }).compile();

    service = module.get<CatsMsService>(CatsMsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
