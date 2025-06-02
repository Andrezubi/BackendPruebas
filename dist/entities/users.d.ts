import { Clinica } from "./clinic";
import { ReporteMedico } from "./report";
import { Reserva } from "./reserve";
import { TurnoMedico } from "./shift";
import { Especialidad } from "./specialty";
export declare class Paciente {
    id: string;
    ci: number;
    nombre: string;
    apellido: string;
    contrasenia: string;
    fechaNac: Date;
    penalizado: boolean;
    estadoCivil: string;
    direccion: string;
    correoElectronico: string;
    tipoSangre: string;
    telefono: number;
    lugarNac: string;
    genero: string;
    reporte: ReporteMedico;
    clinica: Clinica;
    reservas: Reserva[];
}
export declare class Medico {
    id: string;
    ci: number;
    nombre: string;
    apellido: string;
    contrasenia: string;
    clinica: Clinica;
    fechaNac: Date;
    penalizado: boolean;
    estadoCivil: string;
    direccion: string;
    correoElectronico: string;
    tipoSangre: string;
    telefono: number;
    lugarNac: string;
    genero: string;
    reportes: ReporteMedico[];
    turno: TurnoMedico;
    especialidad: Especialidad;
    reservas: Reserva[];
}
export declare class Admin {
    id: string;
    ci: number;
    nombre: string;
    apellido: string;
    contrasenia: string;
    rol: string;
    fechaNac: Date;
    estadoCivil: string;
    direccion: string;
    correoElectronico: string;
    tipoSangre: string;
    telefono: number;
    lugarNac: string;
    genero: string;
}
