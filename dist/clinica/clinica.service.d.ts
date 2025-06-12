import { Repository } from 'typeorm';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { Clinica } from 'src/entities/clinic';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
import { LoginPacienteDto } from 'src/paciente/dto/login-paciente.dto';
import { JwtService } from '@nestjs/jwt';
export declare class ClinicaService {
    private readonly clinicaRepository;
    private readonly jwtService;
    constructor(clinicaRepository: Repository<Clinica>, jwtService: JwtService);
    create(createClinicaDto: CreateClinicaDto): Promise<Clinica>;
    findAll(): Promise<Clinica[]>;
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
    findOne(id: number): string;
    findOneByEmail(correoElectronico: string): Promise<Clinica | null>;
    update(id: number, updateClinicaDto: UpdateClinicaDto): string;
    remove(id: number): string;
}
