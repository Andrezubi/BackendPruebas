import { Repository } from 'typeorm';
import { Reserva, EstadoReserva } from 'src/entities/reserve';
import { Paciente, Medico } from 'src/entities/users';
import { Clinica } from 'src/entities/clinic';
import { CreateReservaDto } from './dto/create-reserva.dto';
export declare class ReservaService {
    private readonly reservaRepo;
    private readonly pacienteRepo;
    private readonly medicoRepo;
    private readonly clinicaRepo;
    constructor(reservaRepo: Repository<Reserva>, pacienteRepo: Repository<Paciente>, medicoRepo: Repository<Medico>, clinicaRepo: Repository<Clinica>);
    actualizarEstado(id: string, nuevoEstado: EstadoReserva): Promise<Reserva>;
    obtenerHistorialPorPaciente(pacienteId: string): Promise<Reserva[]>;
    createReserva(dto: CreateReservaDto): Promise<Reserva>;
}
