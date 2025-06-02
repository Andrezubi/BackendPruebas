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
exports.TurnoMedico = exports.TurnoDeAtencion = void 0;
const typeorm_1 = require("typeorm");
const clinic_1 = require("./clinic");
const users_1 = require("./users");
var TurnoDeAtencion;
(function (TurnoDeAtencion) {
    TurnoDeAtencion["MANIANA"] = "maniana";
    TurnoDeAtencion["TARDE"] = "tarde";
    TurnoDeAtencion["NOCHE"] = "no noche";
})(TurnoDeAtencion || (exports.TurnoDeAtencion = TurnoDeAtencion = {}));
let TurnoMedico = class TurnoMedico {
    id;
    medicos;
    clinica;
    estado;
};
exports.TurnoMedico = TurnoMedico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], TurnoMedico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => users_1.Medico, (medico) => medico.turno),
    __metadata("design:type", Array)
], TurnoMedico.prototype, "medicos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clinic_1.Clinica, (clinica) => clinica.turnos),
    __metadata("design:type", clinic_1.Clinica)
], TurnoMedico.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: TurnoDeAtencion,
        default: TurnoDeAtencion.MANIANA,
    }),
    __metadata("design:type", String)
], TurnoMedico.prototype, "estado", void 0);
exports.TurnoMedico = TurnoMedico = __decorate([
    (0, typeorm_1.Entity)()
], TurnoMedico);
//# sourceMappingURL=shift.js.map