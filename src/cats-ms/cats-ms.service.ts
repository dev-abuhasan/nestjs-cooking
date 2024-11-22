import { Injectable } from '@nestjs/common';
import { CreateCatsMDto } from './dto/create-cats-m.dto';
import { UpdateCatsMDto } from './dto/update-cats-m.dto';

@Injectable()
export class CatsMsService {
  create(createCatsMDto: CreateCatsMDto) {
    return 'This action adds a new catsM';
  }

  findAll() {
    return `This action returns all catsMs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catsM`;
  }

  update(id: number, updateCatsMDto: UpdateCatsMDto) {
    return `This action updates a #${id} catsM`;
  }

  remove(id: number) {
    return `This action removes a #${id} catsM`;
  }
}
