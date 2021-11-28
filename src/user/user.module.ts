import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserResolver } from './resolvers/user.resolver';
import { PrismaService } from 'src/prisma.service';
import { DesignationResolver } from './resolvers/designation.resolver';
import { DesignationService } from './services/designation.service';

@Module({
  exports: [UserService],
  providers: [
    UserResolver,
    UserService,
    DesignationResolver,
    DesignationService,
    PrismaService,
  ],
})
export class UserModule {}
