import { Clinica } from "./clinic";
import { Medico } from "./users";
export declare enum TurnoDeAtencion {
    MANIANA = "maniana",
    TARDE = "tarde",
    NOCHE = "no noche"
}
export declare class TurnoMedico {
    id: string;
    medicos: Medico[];
    clinica: Clinica;
    estado: TurnoDeAtencion;
}
