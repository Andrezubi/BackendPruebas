import { isEmail, isString } from "class-validator";


export class LoginAdministradorDto {
    correoElectronico: string;
    contrasenia: string;

}