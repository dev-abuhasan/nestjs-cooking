import { Injectable } from '@nestjs/common';
import { CreateCatsGraphqlSchemaInput } from './dto/create-cats-graphql-schema.input';
import { UpdateCatsGraphqlSchemaInput } from './dto/update-cats-graphql-schema.input';

@Injectable()
export class CatsGraphqlSchemaService {
  create(createCatsGraphqlSchemaInput: CreateCatsGraphqlSchemaInput) {
    return 'This action adds a new catsGraphqlSchema';
  }

  findAll() {
    return `This action returns all catsGraphqlSchema`;
  }

  findOne(id: number) {
    return `This action returns a #${id} catsGraphqlSchema`;
  }

  update(
    id: number,
    updateCatsGraphqlSchemaInput: UpdateCatsGraphqlSchemaInput,
  ) {
    return `This action updates a #${id} catsGraphqlSchema`;
  }

  remove(id: number) {
    return `This action removes a #${id} catsGraphqlSchema`;
  }
}
