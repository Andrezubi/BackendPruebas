export class CreateReservaDto {
  ciPaciente: number;
  ciMedico: number;
  nombreClinica: string;
  horaInicio: string;
  horaFin: string;
  fecha: Date;
}

export class FinalizarReservaDto {
  diagnostico: string;
  tratamiento: string;
}