import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico } from '../entities/users';
import { Repository } from 'typeorm';
import { LoginMedicoDto } from './dto/login-medico.dto';
import { JwtService } from '@nestjs/jwt';
export declare class MedicoService {
    private readonly medicoRepository;
    private readonly jwtService;
    constructor(medicoRepository: Repository<Medico>, jwtService: JwtService);
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
