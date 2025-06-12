import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente, Medico, Admin } from './entities/users';
import { Especialidad } from './entities/specialty';
import { Clinica } from './entities/clinic';
import { ReporteMedico } from './entities/report';
import { Reserva } from './entities/reserve';
import { TurnoMedico } from './entities/shift';
import { PacienteModule } from './paciente/paciente.module';
import { MedicoModule } from './medico/medico.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constant';
import { AdministradorModule } from './administrador/administrador.module';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "1234",
    database: "saludtotaldb",
    synchronize: true,
    logging: true,
    entities: [Paciente,Medico,Clinica,ReporteMedico,Reserva,TurnoMedico,Especialidad],
  }), PacienteModule],
=======
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'saludtotaldb',
      synchronize: true,
      logging: true,
      entities: [Paciente, Medico, Clinica, ReporteMedico, Reserva, TurnoMedico, Especialidad, Admin],
    }),
    PacienteModule,
    MedicoModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
    AdministradorModule,
  ],
>>>>>>> 03d4a943e0884f0e3bc4170a6b98c9491ef0ae98
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
