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
exports.ReservaController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const report_1 = require("../entities/report");
const historial_access_guard_1 = require("./guards/historial-access.guard");
const create_reserva_dto_1 = require("./dto/create-reserva.dto");
const reserva_service_1 = require("./reserva.service");
const reserve_1 = require("../entities/reserve");
const passport_1 = require("@nestjs/passport");
let ReservaController = class ReservaController {
    reporteRepo;
    reservaService;
    constructor(reporteRepo, reservaService) {
        this.reporteRepo = reporteRepo;
        this.reservaService = reservaService;
    }
    createReserva(createReservaDto) {
        return this.reservaService.createReserva(createReservaDto);
    }
    async actualizarEstadoReserva(id, nuevoEstado) {
        return this.reservaService.actualizarEstado(id, nuevoEstado);
    }
    async obtenerHistorial(pacienteId) {
        return this.reservaService.obtenerHistorialPorPaciente(pacienteId);
    }
};
exports.ReservaController = ReservaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_reserva_dto_1.CreateReservaDto]),
    __metadata("design:returntype", void 0)
], ReservaController.prototype, "createReserva", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('estado')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ReservaController.prototype, "actualizarEstadoReserva", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), historial_access_guard_1.HistorialAccessGuard),
    (0, common_1.Get)('paciente/:pacienteId/historial'),
    __param(0, (0, common_1.Param)('pacienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReservaController.prototype, "obtenerHistorial", null);
exports.ReservaController = ReservaController = __decorate([
    (0, common_1.Controller)('reserva'),
    __param(0, (0, typeorm_1.InjectRepository)(report_1.ReporteMedico)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        reserva_service_1.ReservaService])
], ReservaController);
//# sourceMappingURL=reserva.controller.js.map