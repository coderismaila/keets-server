import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateDesignationInput,
  Designation,
  UpdateDesignationInput,
} from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class DesignationService {
  constructor(private readonly prismaService: PrismaService) {}

  async createDesignation(
    createDesignationDto: CreateDesignationInput,
  ): Promise<Designation | null> {
    // check if designation already exist
    const designation = await this.prismaService.designation.findFirst({
      where: { name: createDesignationDto.name },
    });
    if (designation) throw new BadRequestException('designation already exist');

    return this.prismaService.designation.create({
      data: createDesignationDto,
    });
  }

  async getDesignations(): Promise<Designation[]> {
    return this.prismaService.designation.findMany();
  }

  async updateDesignation(
    updateDesignationDto: UpdateDesignationInput,
  ): Promise<Designation> {
    // check if id is valid
    const designation = await this.prismaService.designation.findFirst({
      where: { id: updateDesignationDto.id },
    });
    if (!designation) throw new BadRequestException('invalid designation');

    return this.prismaService.designation.update({
      where: { id: updateDesignationDto.id },
      data: updateDesignationDto,
    });
  }

  async deleteDesignation(id: string): Promise<Designation> {
    // check if id is valid
    const designation = await this.prismaService.designation.findFirst({
      where: { id },
    });
    if (!designation) throw new BadRequestException('invalid designation');

    return this.prismaService.designation.delete({ where: { id } });
  }
}
