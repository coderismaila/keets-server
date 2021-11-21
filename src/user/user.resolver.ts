import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Prisma } from '.prisma/client';
import {
  CreateUserInput,
  OrderByParams,
  UpdateUserInput,
  User,
} from 'src/graphql';

import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CurrentUser } from 'src/utils/current-user.decorator';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Query('users')
  @UseGuards(GqlAuthGuard)
  findAllUser(
    @Args('orderBy')
    params?: OrderByParams,
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

  @Query()
  @UseGuards(GqlAuthGuard)
  currentUser(@CurrentUser() user: User) {
    const id = user.id;
    return this.userService.getUser({ id });
  }

  @Mutation('updateUser')
  update(
    @Args('updateUserInput')
    params: UpdateUserInput,
  ) {
    console.log('params', params);
    return this.userService.updateUser(params);
  }

  @Mutation('deleteUser')
  remove(@Args('id') id: Prisma.UserWhereUniqueInput) {
    return this.userService.deleteUser(id);
  }
}
