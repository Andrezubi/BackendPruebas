import { Controller, Get, Param, UseGuards, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReporteMedico } from 'src/entities/report';
import { HistorialAccessGuard } from './guards/historial-access.guard';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { ReservaService } from './reserva.service';

@Controller('reserva')
export class ReservaController {
  constructor(
    @InjectRepository(ReporteMedico)
    private readonly reporteRepo: Repository<ReporteMedico>,
    private readonly reservaService: ReservaService
  ) {}

  @Post()
  createReserva(@Body() createReservaDto: CreateReservaDto) {
    return this.reservaService.createReserva(createReservaDto);
  }

  // Este endpoint permite que solo médicos con reserva activa vean el historial del paciente
  @UseGuards(HistorialAccessGuard)
  @Get('paciente/:pacienteId/reportes')
  async obtenerHistorial(@Param('pacienteId') pacienteId: string) {
    return this.reporteRepo.find({
      where: { pacientes: { id: pacienteId } },
      relations: ['medicos'],
      order: { fechaRegistro: 'DESC' },
    });
  }
}
