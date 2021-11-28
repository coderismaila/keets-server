import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UserModule } from './user/user.module';
import { GraphQLDateTime } from 'graphql-iso-date';
import { AuthModule } from './auth/auth.module';
import { AreaOfficeModule } from './area-office/area-office.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault],
      typePaths: ['./**/*.graphql'],
      resolvers: { DateTime: GraphQLDateTime },
    }),
    UserModule,
    AuthModule,
    AreaOfficeModule,
  ],
})
export class AppModule {}
