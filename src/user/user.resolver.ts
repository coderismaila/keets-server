import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Prisma } from '.prisma/client';
import { UserCreateInput } from 'src/@generated/prisma-nestjs-graphql/user/user-create.input';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  createUser(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.userService.createUser(createUserInput);
  }

  @Query('users')
  findAllUser(
    @Args('params')
    params: {
      skip?: number;
      take?: number;
      cursor?: Prisma.UserWhereUniqueInput;
      where?: Prisma.UserWhereInput;
      orderBy?: Prisma.UserOrderByWithRelationInput;
    } = {},
  ) {
    return this.userService.getAllUser(params);
  }

  @Query('userByID')
  findUserById(@Args('id') id: string) {
    return this.userService.getUser({ id });
  }

  @Query('userByEmail')
  findUserByEmail(@Args('email') email: string) {
    return this.userService.getUser({ email });
  }

  @Query('userByUsername')
  findUserByUsername(@Args('username') username: string) {
    return this.userService.getUser({ username });
  }

  @Query('userByStaffId')
  findUserByStaffId(@Args('staffId') staffId: string) {
    return this.userService.getUser({ staffId });
  }

  @Mutation('updateUser')
  update(
    @Args('params')
    params: {
      where: Prisma.UserWhereUniqueInput;
      data: Prisma.UserUpdateInput;
    },
  ) {
    return this.userService.updateUser(params);
  }

  @Mutation('deleteUser')
  remove(@Args('id') id: Prisma.UserWhereUniqueInput) {
    return this.userService.deleteUser(id);
  }
}
