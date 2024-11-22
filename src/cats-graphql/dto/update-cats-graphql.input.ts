import { CreateCatsGraphqlInput } from './create-cats-graphql.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCatsGraphqlInput extends PartialType(
  CreateCatsGraphqlInput,
) {
  @Field(() => Int)
  id: number;
}
