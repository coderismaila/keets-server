import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from '../services/user.service';
import {
  CreateUserInput,
  OrderByParams,
  Role,
  UpdateUserInput,
  User,
} from 'src/graphql';

import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/auth/guards/gql-auth.guard';
import { CurrentUser } from 'src/utils/current-user.decorator';
import { Roles } from 'src/auth/decorator/role.decorator';
import { RolesGuard } from 'src/auth/guards/role.guard';

@Resolver('User')
@UseGuards(GqlAuthGuard, RolesGuard)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation('createUser')
  @Roles(Role.Super, Role.Admin)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Query('users')
  @Roles(Role.Super, Role.Admin)
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
  currentUser(@CurrentUser() user: User) {
    const id = user.id;
    return this.userService.getUser({ id });
  }

  @Mutation('updateUser')
  update(
    @Args('updateUserInput')
    params: UpdateUserInput,
  ) {
    return this.userService.updateUser(params);
  }

  @Mutation('deleteUser')
  @Roles(Role.Super, Role.Admin)
  remove(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
