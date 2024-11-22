import { Injectable } from '@nestjs/common';
import { CreateCatsGraphqlInput } from './dto/create-cats-graphql.input';
import { UpdateCatsGraphqlInput } from './dto/update-cats-graphql.input';

@Injectable()
export class CatsGraphqlService {
  create(createCatsGraphqlInput: CreateCatsGraphqlInput) {
    return 'This action adds a new catsGraphql';
  }

  findAll() {
    return `This action returns all catsGraphql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catsGraphql`;
  }

  update(id: number, updateCatsGraphqlInput: UpdateCatsGraphqlInput) {
    return `This action updates a #${id} catsGraphql`;
  }

  remove(id: number) {
    return `This action removes a #${id} catsGraphql`;
  }
}
