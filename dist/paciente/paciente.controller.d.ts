import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { LoginPacienteDto } from './dto/login-paciente.dto';
export declare class PacienteController {
    private readonly pacienteService;
    constructor(pacienteService: PacienteService);
    create(createPacienteDto: CreatePacienteDto): Promise<import("../entities/users").Paciente>;
    login(loginPacienteDto: LoginPacienteDto): Promise<{
        token: string;
    }>;
    findByEmail(body: {
        correoElectronico: string;
    }): Promise<import("../entities/users").Paciente | null>;
    findAll(): Promise<import("../entities/users").Paciente[]>;
    findOne(id: string): string;
    update(id: string, updatePacienteDto: UpdatePacienteDto): string;
    remove(id: string): string;
}
