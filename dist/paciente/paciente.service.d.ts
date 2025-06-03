import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from '../entities/users';
import { Repository } from 'typeorm';
import { LoginPacienteDto } from './dto/login-paciente.dto';
import { JwtService } from '@nestjs/jwt';
export declare class PacienteService {
    private readonly pacieteRepository;
    private readonly jwtService;
    constructor(pacieteRepository: Repository<Paciente>, jwtService: JwtService);
    create(createPacienteDto: CreatePacienteDto): Promise<Paciente>;
    findAll(): Promise<Paciente[]>;
    findOne(id: number): string;
    findOneByEmail(correoElectronico: string): Promise<Paciente | null>;
    login(loginPacienteDto: LoginPacienteDto): Promise<{
        token: string;
    }>;
    update(id: number, updatePacienteDto: UpdatePacienteDto): string;
    remove(id: number): string;
}
