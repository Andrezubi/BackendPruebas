import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from 'src/entities/reserve';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { HistorialAccessGuard } from './guards/historial-access.guard';
import { ReporteMedico } from 'src/entities/report';
import { Medico, Paciente } from 'src/entities/users';
import { Clinica } from 'src/entities/clinic';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva, ReporteMedico, Paciente, Medico, Clinica]), AuthModule],
  controllers: [ReservaController],
  providers: [ReservaService, HistorialAccessGuard],
})
export class ReservaModule {}
