import { Module } from '@nestjs/common';
import { StationService } from './services/station.service';
import { PrismaService } from 'src/prisma.service';
import { StationResolver } from './resolvers/station.resolver';

@Module({
  providers: [StationResolver, StationService, PrismaService],
})
export class TransmissionStationModule {}
