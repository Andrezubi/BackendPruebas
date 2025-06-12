import { ClinicaService } from './clinica.service';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
import { LoginPacienteDto } from 'src/paciente/dto/login-paciente.dto';
export declare class ClinicaController {
    private readonly clinicaService;
    constructor(clinicaService: ClinicaService);
    create(createClinicaDto: CreateClinicaDto): Promise<import("../entities/clinic").Clinica>;
    findAll(): Promise<import("../entities/clinic").Clinica[]>;
    login(loginClinicaDto: LoginPacienteDto): Promise<{
        access_token: string;
        clinica: {
            id: string;
            nombre: string;
            correoElectronico: string;
            pacientes: import("../entities/users").Paciente[];
            reservas: import("../entities/reserve").Reserva[];
            turnos: import("../entities/shift").TurnoMedico[];
            ubicacion: string;
            telefono: number;
            medicos: import("../entities/users").Medico[];
        };
    }>;
    findOne(id: string): string;
    update(id: string, updateClinicaDto: UpdateClinicaDto): string;
    remove(id: string): string;
}
