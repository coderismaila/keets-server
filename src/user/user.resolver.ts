import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Prisma } from '.prisma/client';
import { OrderByParams, UpdateUserInput } from 'src/graphql';
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
