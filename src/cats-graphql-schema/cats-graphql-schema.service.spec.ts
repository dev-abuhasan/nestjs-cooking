import { Test, TestingModule } from '@nestjs/testing';
import { CatsGraphqlSchemaService } from './cats-graphql-schema.service';

describe('CatsGraphqlSchemaService', () => {
  let service: CatsGraphqlSchemaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsGraphqlSchemaService],
    }).compile();

    service = module.get<CatsGraphqlSchemaService>(CatsGraphqlSchemaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
