import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Reserva, EstadoReserva } from "src/entities/reserve";
import { Repository } from "typeorm";

@Injectable()
export class HistorialAccessGuard implements CanActivate {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepo: Repository<Reserva>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();
    const medicoId = req.user.id;
    const pacienteId = req.params.pacienteId;  // mantener como string

    const reservaActiva = await this.reservaRepo.findOne({
      where: {
        estado: EstadoReserva.EN_CURSO,
        medico: { id: medicoId },
        paciente: { id: pacienteId },  // usar string aquí
      },
      relations: ['medico', 'paciente'],
    });

    if (!reservaActiva) {
      throw new ForbiddenException('No tiene una reserva activa con este paciente');
    }

    return true;
  }
}
