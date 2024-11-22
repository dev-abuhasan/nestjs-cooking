import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatsGraphqlSchemaService } from './cats-graphql-schema.service';
import { CreateCatsGraphqlSchemaInput } from './dto/create-cats-graphql-schema.input';
import { UpdateCatsGraphqlSchemaInput } from './dto/update-cats-graphql-schema.input';

@Resolver('CatsGraphqlSchema')
export class CatsGraphqlSchemaResolver {
  constructor(
    private readonly catsGraphqlSchemaService: CatsGraphqlSchemaService,
  ) {}

  @Mutation('createCatsGraphqlSchema')
  create(
    @Args('createCatsGraphqlSchemaInput')
    createCatsGraphqlSchemaInput: CreateCatsGraphqlSchemaInput,
  ) {
    return this.catsGraphqlSchemaService.create(createCatsGraphqlSchemaInput);
  }

  @Query('catsGraphqlSchema')
  findAll() {
    return this.catsGraphqlSchemaService.findAll();
  }

  @Query('catsGraphqlSchema')
  findOne(@Args('id') id: number) {
    return this.catsGraphqlSchemaService.findOne(id);
  }

  @Mutation('updateCatsGraphqlSchema')
  update(
    @Args('updateCatsGraphqlSchemaInput')
    updateCatsGraphqlSchemaInput: UpdateCatsGraphqlSchemaInput,
  ) {
    return this.catsGraphqlSchemaService.update(
      updateCatsGraphqlSchemaInput.id,
      updateCatsGraphqlSchemaInput,
    );
  }

  @Mutation('removeCatsGraphqlSchema')
  remove(@Args('id') id: number) {
    return this.catsGraphqlSchemaService.remove(id);
  }
}
