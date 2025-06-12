import { Medico, Paciente } from "./users";
import { Reserva } from "./reserve";
import { TurnoMedico } from "./shift";
export declare class Clinica {
    id: string;
    nombre: string;
    contrasenia: string;
    correoElectronico: string;
    pacientes: Paciente[];
    reservas: Reserva[];
    turnos: TurnoMedico[];
    ubicacion: string;
    telefono: number;
    medicos: Medico[];
}
