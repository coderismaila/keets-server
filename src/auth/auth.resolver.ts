import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { LoginInput, SignUpInput } from 'src/graphql';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Mutation('login')
  async login(
    @Args('loginInput') loginInputDto: LoginInput,
  ): Promise<{ token: string; sub: string }> {
    return this.authService.login(loginInputDto);
  }

  @Mutation('signUp')
  async signUp(
    @Args('signUpInput') signUpInputDto: SignUpInput,
  ): Promise<{ token: string; sub: string }> {
    return this.authService.signUp(signUpInputDto);
  }

  // @Query((returns) => User)
  // @UseGuards(GqlAuthGuard)
  // currentUser(@CurrentUser() user: User) {
  //   const id = user.id;
  //   return this.userService.getUser({ id });
  // }
}
