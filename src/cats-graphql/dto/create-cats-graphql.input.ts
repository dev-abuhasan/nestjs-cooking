import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCatsGraphqlInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
