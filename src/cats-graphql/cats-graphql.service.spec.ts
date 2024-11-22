import { Test, TestingModule } from '@nestjs/testing';
import { CatsGraphqlService } from './cats-graphql.service';

describe('CatsGraphqlService', () => {
  let service: CatsGraphqlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsGraphqlService],
    }).compile();

    service = module.get<CatsGraphqlService>(CatsGraphqlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
