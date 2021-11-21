import { Prisma, User } from '@prisma/client';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
  CreateUserInput,
  LoginInput,
  OrderByParams,
  UpdateUserInput,
} from '../graphql';
import { hashPassword } from 'src/utils/password.bcrypt';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    // check if user already exists
    const emailExists = await this.prismaService.user.findFirst({
      where: { email: createUserInput.email },
    });

    if (emailExists) throw new BadRequestException('user already registered');
    const usernameExists = await this.prismaService.user.findFirst({
      where: { username: createUserInput.username },
    });

    if (usernameExists)
      throw new BadRequestException('user already registered');

    const staffidExists = await this.prismaService.user.findFirst({
      where: { staffId: createUserInput.staffId },
    });

    if (staffidExists) throw new BadRequestException('user already registered');

    // hash the password
    createUserInput.password = await hashPassword(createUserInput.password);

    return this.prismaService.user.create({ data: createUserInput });
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

  async getUserByUsernameEmailStaffId(
    loginInput: LoginInput,
  ): Promise<User | null> {
    return this.prismaService.user.findFirst({
      where: {
        OR: [
          { username: loginInput.username },
          { email: loginInput.email },
          { staffId: loginInput.staffId },
        ],
      },
    });
  }

  async updateUser(updateUserInput: UpdateUserInput): Promise<User> {
    return this.prismaService.user.update({
      where: { id: updateUserInput.id },
      data: updateUserInput,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prismaService.user.delete({
      where,
    });
  }
}
