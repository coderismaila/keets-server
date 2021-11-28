import { Module } from '@nestjs/common';
import { AreaOfficeService } from './area-office.service';
import { AreaOfficeResolver } from './area-office.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AreaOfficeResolver, AreaOfficeService, PrismaService],
})
export class AreaOfficeModule {}
