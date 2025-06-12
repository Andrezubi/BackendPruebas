import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reserva } from "src/entities/reserve";
import { Repository } from "typeorm";
export declare class HistorialAccessGuard implements CanActivate {
    private readonly reservaRepo;
    constructor(reservaRepo: Repository<Reserva>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
