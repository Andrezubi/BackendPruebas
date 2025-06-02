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
exports.ReporteMedico = void 0;
const typeorm_1 = require("typeorm");
const users_1 = require("./users");
let ReporteMedico = class ReporteMedico {
    id;
    medicos;
    pacientes;
    fechaRegistro;
    horaRegistro;
    diagnostico;
    tratamiento;
    notas;
};
exports.ReporteMedico = ReporteMedico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ReporteMedico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_1.Medico, (medico) => medico.reportes),
    __metadata("design:type", users_1.Medico)
], ReporteMedico.prototype, "medicos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_1.Paciente, (paciente) => paciente.reporte),
    __metadata("design:type", users_1.Paciente)
], ReporteMedico.prototype, "pacientes", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ReporteMedico.prototype, "fechaRegistro", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'time' }),
    __metadata("design:type", String)
], ReporteMedico.prototype, "horaRegistro", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteMedico.prototype, "diagnostico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteMedico.prototype, "tratamiento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ReporteMedico.prototype, "notas", void 0);
exports.ReporteMedico = ReporteMedico = __decorate([
    (0, typeorm_1.Entity)()
], ReporteMedico);
//# sourceMappingURL=report.js.map