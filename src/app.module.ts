import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { CatsGraphqlModule } from './cats-graphql/cats-graphql.module';
import { CatsGraphqlSchemaModule } from './cats-graphql-schema/cats-graphql-schema.module';
import { CatsMsModule } from './cats-ms/cats-ms.module';
import { CatsWsModule } from './cats-ws/cats-ws.module';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
    UsersModule,
    CatsModule,
    CatsGraphqlModule,
    CatsGraphqlSchemaModule,
    CatsMsModule,
    CatsWsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
// eslint-disable-next-line prettier/prettier
export class AppModule { }
