import { Module } from '@nestjs/common';
import { ClinicaService } from './clinica.service';
import { ClinicaController } from './clinica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinica } from 'src/entities/clinic';

@Module({
  imports:[TypeOrmModule.forFeature([Clinica])],
  controllers: [ClinicaController],
  providers: [ClinicaService],
})
export class ClinicaModule {}
