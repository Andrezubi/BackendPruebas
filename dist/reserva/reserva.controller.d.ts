import { Repository } from 'typeorm';
import { ReporteMedico } from 'src/entities/report';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { ReservaService } from './reserva.service';
export declare class ReservaController {
    private readonly reporteRepo;
    private readonly reservaService;
    constructor(reporteRepo: Repository<ReporteMedico>, reservaService: ReservaService);
    createReserva(createReservaDto: CreateReservaDto): Promise<import("./entities/reserva.entity").Reserva>;
    obtenerHistorial(pacienteId: string): Promise<ReporteMedico[]>;
}
