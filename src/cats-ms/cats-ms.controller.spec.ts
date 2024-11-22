import { Test, TestingModule } from '@nestjs/testing';
import { CatsMsController } from './cats-ms.controller';
import { CatsMsService } from './cats-ms.service';

describe('CatsMsController', () => {
  let controller: CatsMsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsMsController],
      providers: [CatsMsService],
    }).compile();

    controller = module.get<CatsMsController>(CatsMsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
