import { isEmail, isString } from "class-validator";


export class LoginPacienteDto {
    correoElectronico: string;
    contrasenia: string;

}