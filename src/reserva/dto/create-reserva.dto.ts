export class CreateReservaDto {
  nombrePaciente: string;
  nombreMedico: string;
  nombreClinica: string;
  horaInicio: string;
  horaFin: string;
  fecha: Date;
}

export class FinalizarReservaDto {
  diagnostico: string;
  tratamiento: string;
}