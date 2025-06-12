import { Repository } from 'typeorm';
import { ReporteMedico } from 'src/entities/report';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { ReservaService } from './reserva.service';
import { EstadoReserva } from 'src/entities/reserve';
export declare class ReservaController {
    private readonly reporteRepo;
    private readonly reservaService;
    constructor(reporteRepo: Repository<ReporteMedico>, reservaService: ReservaService);
    createReserva(createReservaDto: CreateReservaDto): Promise<import("src/entities/reserve").Reserva>;
    actualizarEstadoReserva(id: string, nuevoEstado: EstadoReserva): Promise<import("src/entities/reserve").Reserva>;
    obtenerHistorial(pacienteId: string): Promise<import("src/entities/reserve").Reserva[]>;
}
