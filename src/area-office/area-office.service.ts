import { BadRequestException, Injectable } from '@nestjs/common';
import {
  AreaOffice,
  CreateAreaOfficeInput,
  UpdateAreaOfficeInput,
} from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AreaOfficeService {
  constructor(private readonly prismaService: PrismaService) {}

  async createAreaOffice(
    createAreaOfficeInput: CreateAreaOfficeInput,
  ): Promise<AreaOffice> {
    // check if area office exist
    const areaOffice = await this.prismaService.areaOffice.findFirst({
      where: {
        name: createAreaOfficeInput.name,
      },
    });
    if (areaOffice)
      throw new BadRequestException(
        `area office with name ${createAreaOfficeInput.name} already exist`,
      );

    return this.prismaService.areaOffice.create({
      data: createAreaOfficeInput,
    });
  }

  async findAreaOffices(): Promise<AreaOffice[]> {
    return this.prismaService.areaOffice.findMany();
  }

  async findAreaOfficeById(id: string): Promise<AreaOffice> {
    // check if area office exist
    const areaOffice = await this.prismaService.areaOffice.findFirst({
      where: { id },
    });
    if (!areaOffice)
      throw new BadRequestException(`area office with id ${id} does not exist`);

    return areaOffice;
  }

  async updateAreaOffice(updateAreaOfficeInput: UpdateAreaOfficeInput) {
    // check if area office exist
    const areaOffice = await this.prismaService.areaOffice.findFirst({
      where: { id: updateAreaOfficeInput.id },
    });
    if (!areaOffice)
      throw new BadRequestException(
        `area office with id ${updateAreaOfficeInput.id} does not exist`,
      );

    return this.prismaService.areaOffice.update({
      where: { id: updateAreaOfficeInput.id },
      data: updateAreaOfficeInput,
    });
  }

  async deleteAreaOffice(id: string) {
    // check if area office exist
    const areaOffice = await this.prismaService.areaOffice.findFirst({
      where: { id },
    });
    if (!areaOffice)
      throw new BadRequestException(`area office with id ${id} does not exist`);

    return this.prismaService.areaOffice.delete({ where: { id } });
  }
}
