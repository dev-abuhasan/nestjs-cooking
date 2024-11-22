import { Injectable } from '@nestjs/common';
import { CreateCatsWDto } from './dto/create-cats-w.dto';
import { UpdateCatsWDto } from './dto/update-cats-w.dto';

@Injectable()
export class CatsWsService {
  create(createCatsWDto: CreateCatsWDto) {
    return 'This action adds a new catsW';
  }

  findAll() {
    return `This action returns all catsWs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catsW`;
  }

  update(id: number, updateCatsWDto: UpdateCatsWDto) {
    return `This action updates a #${id} catsW`;
  }

  remove(id: number) {
    return `This action removes a #${id} catsW`;
  }
}
