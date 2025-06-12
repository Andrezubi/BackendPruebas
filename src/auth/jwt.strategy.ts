import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'este es el mensaje secreto wooooooo', // usa el mismo secreto que usas al firmar el JWT
    });
  }

  async validate(payload: any) {
    return { id: payload.sub, username: payload.username };
  }
}
