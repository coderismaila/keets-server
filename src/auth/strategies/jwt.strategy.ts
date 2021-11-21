import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { User } from 'src/graphql';

import { UserService } from 'src/user/user.service';
import { jwtConstants } from '../constants';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: {
    username: string;
    sub: string;
  }): Promise<User | null> {
    // return { userId: payload.sub, username: payload.username };
    return this.userService.getUser({ username: payload.username });
  }
}
