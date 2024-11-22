import { Test, TestingModule } from '@nestjs/testing';
import { CatsGraphqlSchemaResolver } from './cats-graphql-schema.resolver';
import { CatsGraphqlSchemaService } from './cats-graphql-schema.service';

describe('CatsGraphqlSchemaResolver', () => {
  let resolver: CatsGraphqlSchemaResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsGraphqlSchemaResolver, CatsGraphqlSchemaService],
    }).compile();

    resolver = module.get<CatsGraphqlSchemaResolver>(CatsGraphqlSchemaResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
