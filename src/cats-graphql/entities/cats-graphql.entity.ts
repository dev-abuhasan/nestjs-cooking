import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CatsGraphql {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
