import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { Admin } from 'src/entities/users';
import { Repository } from 'typeorm';
import { LoginAdministradorDto } from './dto/login-administrador.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AdministradorService {
    private readonly administradorRepository;
    private readonly jwtService;
    constructor(administradorRepository: Repository<Admin>, jwtService: JwtService);
    create(createAdministradorDto: CreateAdministradorDto): Promise<Admin>;
    findAll(): string;
    findOne(id: number): string;
    findOneByEmail(correoElectronico: string): Promise<Admin | null>;
    login(loginAdministradorDto: LoginAdministradorDto): Promise<{
        token: string;
    }>;
    update(id: number, updateAdministradorDto: UpdateAdministradorDto): string;
    remove(id: number): string;
}
