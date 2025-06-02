import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from 'src/entities/users';

@Module({
  imports:[TypeOrmModule.forFeature([Paciente])],
  controllers: [PacienteController ],
  providers: [PacienteService],
})
export class PacienteModule {}
