import { Module } from '@nestjs/common';
import { CatsGraphqlService } from './cats-graphql.service';
import { CatsGraphqlResolver } from './cats-graphql.resolver';

@Module({
  providers: [CatsGraphqlResolver, CatsGraphqlService],
})
export class CatsGraphqlModule {}
