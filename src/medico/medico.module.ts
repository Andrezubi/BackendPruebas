import { Module } from '@nestjs/common';
import { MedicoService } from './medico.service';
import { MedicoController } from './medico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medico } from 'src/entities/users';
import { Clinica } from 'src/entities/clinic';
import { Especialidad } from 'src/entities/specialty';

@Module({
  imports:[TypeOrmModule.forFeature([Medico,Clinica,Especialidad])],
  controllers: [MedicoController],
  providers: [MedicoService],
})
export class MedicoModule {}
