import { isEmail, isString } from "class-validator";


export class LoginMedicoDto {
    correoElectronico: string;
    contrasenia: string;

}