import { Module } from '@nestjs/common';
import { AdministradorService } from './administrador.service';
import { AdministradorController } from './administrador.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/entities/users';


@Module({
  imports:[TypeOrmModule.forFeature([Admin])],
  controllers: [AdministradorController],
  providers: [AdministradorService],
})
export class AdministradorModule {}
