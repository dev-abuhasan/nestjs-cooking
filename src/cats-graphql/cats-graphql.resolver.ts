import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CatsGraphqlService } from './cats-graphql.service';
import { CatsGraphql } from './entities/cats-graphql.entity';
import { CreateCatsGraphqlInput } from './dto/create-cats-graphql.input';
import { UpdateCatsGraphqlInput } from './dto/update-cats-graphql.input';

@Resolver(() => CatsGraphql)
export class CatsGraphqlResolver {
  constructor(private readonly catsGraphqlService: CatsGraphqlService) {}

  @Mutation(() => CatsGraphql)
  createCatsGraphql(
    @Args('createCatsGraphqlInput')
    createCatsGraphqlInput: CreateCatsGraphqlInput,
  ) {
    return this.catsGraphqlService.create(createCatsGraphqlInput);
  }

  @Query(() => [CatsGraphql], { name: 'catsGraphql' })
  findAll() {
    return this.catsGraphqlService.findAll();
  }

  @Query(() => CatsGraphql, { name: 'catsGraphql' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.catsGraphqlService.findOne(id);
  }

  @Mutation(() => CatsGraphql)
  updateCatsGraphql(
    @Args('updateCatsGraphqlInput')
    updateCatsGraphqlInput: UpdateCatsGraphqlInput,
  ) {
    return this.catsGraphqlService.update(
      updateCatsGraphqlInput.id,
      updateCatsGraphqlInput,
    );
  }

  @Mutation(() => CatsGraphql)
  removeCatsGraphql(@Args('id', { type: () => Int }) id: number) {
    return this.catsGraphqlService.remove(id);
  }
}
