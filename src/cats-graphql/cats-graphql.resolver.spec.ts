import { Test, TestingModule } from '@nestjs/testing';
import { CatsGraphqlResolver } from './cats-graphql.resolver';
import { CatsGraphqlService } from './cats-graphql.service';

describe('CatsGraphqlResolver', () => {
  let resolver: CatsGraphqlResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsGraphqlResolver, CatsGraphqlService],
    }).compile();

    resolver = module.get<CatsGraphqlResolver>(CatsGraphqlResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
