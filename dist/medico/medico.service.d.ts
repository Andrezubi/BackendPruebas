import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico } from '../entities/users';
import { Repository } from 'typeorm';
import { LoginMedicoDto } from './dto/login-medico.dto';
import { JwtService } from '@nestjs/jwt';
import { Clinica } from 'src/entities/clinic';
import { Especialidad } from 'src/entities/specialty';
export declare class MedicoService {
    private readonly medicoRepository;
    private readonly jwtService;
    private readonly clinicaRepository;
    private readonly especialidadesRepository;
    constructor(medicoRepository: Repository<Medico>, jwtService: JwtService, clinicaRepository: Repository<Clinica>, especialidadesRepository: Repository<Especialidad>);
    create(createMedicoDto: CreateMedicoDto): Promise<Medico>;
    findAll(): string;
    findOne(id: number): string;
    findOneByEmail(correoElectronico: string): Promise<Medico | null>;
    login(loginMedicoDto: LoginMedicoDto): Promise<{
        token: string;
    }>;
    update(id: number, updateMedicoDto: UpdateMedicoDto): string;
    remove(id: number): string;
}
