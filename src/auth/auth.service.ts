import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginInput, SignUpInput } from 'src/graphql';
import { UserService } from 'src/user/services/user.service';
import { comparePassword } from 'src/utils/password.bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getUser({ username });
    if (user && user.password === password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginInput: LoginInput) {
    const user = await this.userService.getUserByUsernameEmailStaffId(
      loginInput,
    );

    if (!user) throw new BadRequestException('email or password incorrect');

    const valid = await comparePassword(loginInput.password, user.password);

    if (!valid) throw new BadRequestException('email or password incorrect');

    delete user.password;

    return {
      token: this.jwtService.sign(user),
      sub: user.id,
    };
  }

  async signUp(
    signupInput: SignUpInput,
  ): Promise<{ token: string; sub: string }> {
    // check if email exists
    const user = await this.userService.createUser(signupInput);

    delete user.password;

    return {
      token: this.jwtService.sign(user),
      sub: user.id,
    };
  }
}
