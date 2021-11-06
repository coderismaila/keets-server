import { Prisma, User } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { OrderByParams, UpdateUserInput } from '../graphql';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prismaService.user.create({ data });
  }

  async getAllUser(orderBy: OrderByParams): Promise<User[]> {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prismaService.user.findMany({
      orderBy: { [field]: direction },
    });
  }

  async getUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: userWhereUniqueInput });
  }

  async updateUser(params: UpdateUserInput): Promise<User> {
    return this.prismaService.user.update({
      where: { id: params.id },
      data: params,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prismaService.user.delete({
      where,
    });
  }
}
