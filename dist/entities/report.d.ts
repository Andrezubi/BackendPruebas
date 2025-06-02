import { Paciente, Medico } from "./users";
export declare class ReporteMedico {
    id: string;
    medicos: Medico;
    pacientes: Paciente;
    fechaRegistro: Date;
    horaRegistro: string;
    diagnostico: string;
    tratamiento: string;
    notas: string;
}
