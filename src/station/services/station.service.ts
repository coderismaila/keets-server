import { Station } from '.prisma/client';
import { BadRequestException, Injectable } from '@nestjs/common';
import { StationCreateInput } from 'src/@generated/prisma-nestjs-graphql/station/station-create.input';
import { StationUpdateInput } from 'src/@generated/prisma-nestjs-graphql/station/station-update.input';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StationService {
  constructor(private readonly prismaService: PrismaService) {}
  async createStation(
    createStationInput: StationCreateInput,
  ): Promise<Station> {
    // check if station already exists
    const station = await this.prismaService.station.findFirst({
      where: {
        name: createStationInput.name,
      },
    });

    if (station) {
      throw new BadRequestException('Station already exists');
    }

    return this.prismaService.station.create({
      data: createStationInput,
    });
  }

  async stations(): Promise<Station[]> {
    return this.prismaService.station.findMany();
  }

  async stationById(id: string): Promise<Station> {
    // check if station already exists
    const station = await this.prismaService.station.findFirst({
      where: {
        id,
      },
    });

    if (station) {
      throw new BadRequestException('Station does not exist');
    }

    return station;
  }

  async updateStation(
    id: string,
    stationUpdateInput: StationUpdateInput,
  ): Promise<Station> {
    // check if station already exists
    const station = await this.prismaService.station.findFirst({
      where: {
        id,
      },
    });

    if (!station) {
      throw new BadRequestException('Station does not exist');
    }

    return this.prismaService.station.update({
      where: {
        id,
      },
      data: stationUpdateInput,
      include: {
        areaOffice: true,
      },
    });
  }

  deleteStation(id: string) {
    // check if station already exists
    const Station = this.prismaService.station.findFirst({
      where: {
        id,
      },
    });

    if (!Station) {
      throw new BadRequestException('Station does not exist');
    }

    return this.prismaService.station.delete({
      where: {
        id,
      },
    });
  }
}
