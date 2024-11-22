import { CreateCatsGraphqlSchemaInput } from './create-cats-graphql-schema.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCatsGraphqlSchemaInput extends PartialType(
  CreateCatsGraphqlSchemaInput,
) {
  id: number;
}
