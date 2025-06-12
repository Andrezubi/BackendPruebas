import { Repository } from 'typeorm';
import { Reserva } from './entities/reserva.entity';
import { Paciente } from 'src/entities/users';
import { Medico } from 'src/entities/users';
import { Clinica } from 'src/entities/clinic';
import { CreateReservaDto } from './dto/create-reserva.dto';
export declare class ReservaService {
    private readonly reservaRepo;
    private readonly pacienteRepo;
    private readonly medicoRepo;
    private readonly clinicaRepo;
    constructor(reservaRepo: Repository<Reserva>, pacienteRepo: Repository<Paciente>, medicoRepo: Repository<Medico>, clinicaRepo: Repository<Clinica>);
    createReserva(dto: CreateReservaDto): Promise<Reserva>;
}
