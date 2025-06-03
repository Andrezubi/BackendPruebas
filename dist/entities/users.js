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
exports.Admin = exports.Medico = exports.Paciente = void 0;
const typeorm_1 = require("typeorm");
const clinic_1 = require("./clinic");
const report_1 = require("./report");
const reserve_1 = require("./reserve");
const shift_1 = require("./shift");
const specialty_1 = require("./specialty");
let Paciente = class Paciente {
    id;
    ci;
    nombre;
    apellido;
    contrasenia;
    fechaNac;
    penalizado;
    estadoCivil;
    direccion;
    correoElectronico;
    tipoSangre;
    telefono;
    lugarNac;
    genero;
    reporte;
    clinica;
    reservas;
};
exports.Paciente = Paciente;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Paciente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Paciente.prototype, "ci", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "contrasenia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "fechaNac", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Paciente.prototype, "penalizado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "estadoCivil", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Paciente.prototype, "correoElectronico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "tipoSangre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Paciente.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "lugarNac", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Paciente.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => report_1.ReporteMedico, (reporte) => reporte.pacientes),
    __metadata("design:type", report_1.ReporteMedico)
], Paciente.prototype, "reporte", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clinic_1.Clinica, (clinica) => clinica.pacientes),
    __metadata("design:type", clinic_1.Clinica)
], Paciente.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reserve_1.Reserva, (reserva) => reserva.pacientes),
    __metadata("design:type", Array)
], Paciente.prototype, "reservas", void 0);
exports.Paciente = Paciente = __decorate([
    (0, typeorm_1.Entity)()
], Paciente);
let Medico = class Medico {
    id;
    ci;
    nombre;
    apellido;
    contrasenia;
    clinica;
    fechaNac;
    penalizado;
    estadoCivil;
    direccion;
    correoElectronico;
    tipoSangre;
    telefono;
    lugarNac;
    genero;
    reportes;
    turno;
    especialidad;
    reservas;
};
exports.Medico = Medico;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Medico.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Medico.prototype, "ci", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "contrasenia", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => clinic_1.Clinica, (clinica) => clinica.medicos),
    __metadata("design:type", clinic_1.Clinica)
], Medico.prototype, "clinica", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Medico.prototype, "fechaNac", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Medico.prototype, "penalizado", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "estadoCivil", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "correoElectronico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "tipoSangre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Medico.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "lugarNac", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Medico.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => report_1.ReporteMedico, (reporte) => reporte.medicos),
    __metadata("design:type", Array)
], Medico.prototype, "reportes", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shift_1.TurnoMedico, (turno) => turno.medicos),
    __metadata("design:type", shift_1.TurnoMedico)
], Medico.prototype, "turno", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => specialty_1.Especialidad, (especialidad) => especialidad.medicos),
    __metadata("design:type", specialty_1.Especialidad)
], Medico.prototype, "especialidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reserve_1.Reserva, (reserva) => reserva.medicos),
    __metadata("design:type", Array)
], Medico.prototype, "reservas", void 0);
exports.Medico = Medico = __decorate([
    (0, typeorm_1.Entity)()
], Medico);
let Admin = class Admin {
    id;
    ci;
    nombre;
    apellido;
    contrasenia;
    rol;
    fechaNac;
    estadoCivil;
    direccion;
    correoElectronico;
    tipoSangre;
    telefono;
    lugarNac;
    genero;
};
exports.Admin = Admin;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Admin.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", Number)
], Admin.prototype, "ci", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "apellido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "contrasenia", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Admin.prototype, "fechaNac", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "estadoCivil", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "correoElectronico", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "tipoSangre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Admin.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "lugarNac", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Admin.prototype, "genero", void 0);
exports.Admin = Admin = __decorate([
    (0, typeorm_1.Entity)()
], Admin);
//# sourceMappingURL=users.js.map