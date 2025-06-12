import { MedicoService } from './medico.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { LoginMedicoDto } from './dto/login-medico.dto';
export declare class MedicoController {
    private readonly medicoService;
    constructor(medicoService: MedicoService);
    create(createMedicoDto: CreateMedicoDto): Promise<import("../entities/users").Medico[]>;
    login(loginMedicoDto: LoginMedicoDto): Promise<{
        token: string;
    }>;
    findByEmail(body: {
        correoElectronico: string;
    }): Promise<import("../entities/users").Medico | null>;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateMedicoDto: UpdateMedicoDto): string;
    remove(id: string): string;
}
