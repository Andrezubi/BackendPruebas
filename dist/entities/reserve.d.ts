import { Paciente, Medico } from "./users";
import { Clinica } from "./clinic";
export declare enum EstadoReserva {
    EN_CURSO = "en curso",
    RESERVADO = "reservado",
    NO_ATENDIDO = "no atendido"
}
export declare class Reserva {
    id: string;
    medico: Medico;
    paciente: Paciente;
    clinica: Clinica;
    estado: EstadoReserva;
    horaInicio: string;
    horaFin: string;
    fecha: Date;
}
