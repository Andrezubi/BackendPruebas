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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = exports.EstadoReserva = void 0;
const typeorm_1 = require("typeorm");
const users_1 = require("./users");
;
const clinic_1 = require("./clinic");
var EstadoReserva;
(function (EstadoReserva) {
    EstadoReserva["EN_CURSO"] = "en curso";
    EstadoReserva["RESERVADO"] = "reservado";
    EstadoReserva["NO_ATENDIDO"] = "no atendido";
})(EstadoReserva || (exports.EstadoReserva = EstadoReserva = {}));
let Reserva = class Reserva {
    id;
    medicos;
    pacientes;
    clinica;
    estado;
    horaInicio;
    horaFin;
    fecha;
};
exports.Reserva = Reserva;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Reserva.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_1.Medico, (medico) => medico.reservas),
    __metadata("design:type", Array)
], Reserva.prototype, "medicos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_1.Paciente, (paciente) => paciente.reservas),
    __metadata("design:type", Array)
], Reserva.prototype, "pacientes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clinic_1.Clinica, (clinica) => clinica.reservas),
    __metadata("design:type", clinic_1.Clinica)
], Reserva.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: EstadoReserva,
        default: EstadoReserva.RESERVADO,
    }),
    __metadata("design:type", String)
], Reserva.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], Reserva.prototype, "horaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], Reserva.prototype, "horaFin", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Reserva.prototype, "fecha", void 0);
exports.Reserva = Reserva = __decorate([
    (0, typeorm_1.Entity)()
], Reserva);
//# sourceMappingURL=reserve.js.map