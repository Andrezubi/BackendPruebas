import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy'; // ajusta el path según tu estructura

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'este es el mensaje secreto wooooooo', // debe ser el mismo que usaste en la estrategia
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthModule,JwtStrategy],
  exports: [AuthModule, JwtModule],
})
export class AuthModule {}
