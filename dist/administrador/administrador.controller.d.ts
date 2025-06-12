import { AdministradorService } from './administrador.service';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { LoginAdministradorDto } from './dto/login-administrador.dto';
export declare class AdministradorController {
    private readonly administradorService;
    constructor(administradorService: AdministradorService);
    create(createAdministradorDto: CreateAdministradorDto): Promise<import("../entities/users").Admin[]>;
    login(loginMedicoDto: LoginAdministradorDto): Promise<{
        token: string;
    }>;
    findByEmail(body: {
        correoElectronico: string;
    }): Promise<import("../entities/users").Admin | null>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAdministradorDto: UpdateAdministradorDto): string;
    remove(id: string): string;
}
