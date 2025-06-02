import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  Paciente,Medico } from './entities/users';
import { Especialidad } from './entities/specialty';
import { Clinica } from './entities/clinic';
import { ReporteMedico } from './entities/report';
import { Reserva } from './entities/reserve';
import { TurnoMedico } from './entities/shift';
import { PacienteModule } from './paciente/paciente.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "saludtotaldb",
    synchronize: true,
    logging: true,
    entities: [Paciente,Medico,Clinica,ReporteMedico,Reserva,TurnoMedico,Especialidad],
  }), PacienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
