"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const reserve_1 = require("../entities/reserve");
const users_1 = require("../entities/users");
const clinic_1 = require("../entities/clinic");
let ReservaService = class ReservaService {
    reservaRepo;
    pacienteRepo;
    medicoRepo;
    clinicaRepo;
    constructor(reservaRepo, pacienteRepo, medicoRepo, clinicaRepo) {
        this.reservaRepo = reservaRepo;
        this.pacienteRepo = pacienteRepo;
        this.medicoRepo = medicoRepo;
        this.clinicaRepo = clinicaRepo;
    }
    async actualizarEstado(id, nuevoEstado) {
        const reserva = await this.reservaRepo.findOne({ where: { id } });
        if (!reserva) {
            throw new common_1.NotFoundException(`Reserva con id ${id} no encontrada`);
        }
        reserva.estado = nuevoEstado;
        return this.reservaRepo.save(reserva);
    }
    async obtenerHistorialPorPaciente(pacienteId) {
        return this.reservaRepo.find({
            where: { paciente: { id: pacienteId } },
            relations: ['medico', 'paciente'],
            order: { fecha: 'DESC' },
        });
    }
    async createReserva(dto) {
        const paciente = await this.pacienteRepo.findOneBy({ ci: dto.ciPaciente });
        const medico = await this.medicoRepo.findOneBy({ ci: dto.ciMedico });
        const clinica = await this.clinicaRepo.findOneBy({ nombre: dto.nombreClinica });
        if (!paciente)
            throw new common_1.NotFoundException(`Paciente no encontrado: ${dto.ciPaciente}`);
        if (!medico)
            throw new common_1.NotFoundException(`Médico no encontrado: ${dto.ciMedico}`);
        if (!clinica)
            throw new common_1.NotFoundException(`Clínica no encontrada: ${dto.nombreClinica}`);
        const reserva = this.reservaRepo.create({
            paciente,
            medico,
            clinica,
            horaInicio: dto.horaInicio,
            horaFin: dto.horaFin,
            fecha: dto.fecha,
        });
        return this.reservaRepo.save(reserva);
    }
};
exports.ReservaService = ReservaService;
exports.ReservaService = ReservaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reserve_1.Reserva)),
    __param(1, (0, typeorm_1.InjectRepository)(users_1.Paciente)),
    __param(2, (0, typeorm_1.InjectRepository)(users_1.Medico)),
    __param(3, (0, typeorm_1.InjectRepository)(clinic_1.Clinica)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ReservaService);
//# sourceMappingURL=reserva.service.js.map