import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from '../entities/users';
import { Repository } from 'typeorm';
export declare class PacienteService {
    private pacieteRepository;
    constructor(pacieteRepository: Repository<Paciente>);
    create(createPacienteDto: CreatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(id: number): string;
    update(id: number, updatePacienteDto: UpdatePacienteDto): string;
    remove(id: number): string;
}
