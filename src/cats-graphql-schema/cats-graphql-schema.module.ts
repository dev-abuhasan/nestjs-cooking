import { Module } from '@nestjs/common';
import { CatsGraphqlSchemaService } from './cats-graphql-schema.service';
import { CatsGraphqlSchemaResolver } from './cats-graphql-schema.resolver';

@Module({
  providers: [CatsGraphqlSchemaResolver, CatsGraphqlSchemaService],
})
export class CatsGraphqlSchemaModule {}
