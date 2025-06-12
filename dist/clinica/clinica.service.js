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
exports.ClinicaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const clinic_1 = require("../entities/clinic");
const typeorm_2 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
let ClinicaService = class ClinicaService {
    clinicaRepository;
    jwtService;
    constructor(clinicaRepository, jwtService) {
        this.clinicaRepository = clinicaRepository;
        this.jwtService = jwtService;
    }
    create(createClinicaDto) {
        const newClinic = this.clinicaRepository.create({ ...createClinicaDto });
        console.log("se creo exitosamente el paciente");
        return this.clinicaRepository.save(newClinic);
    }
    findAll() {
        return this.clinicaRepository.find();
    }
    async login(loginClinicaDto) {
        const newClinic = await this.findOneByEmail(loginClinicaDto.correoElectronico);
        if (!newClinic) {
            console.log("se encontro el email");
            throw new common_1.BadRequestException("Email incorrecto");
        }
        if (loginClinicaDto.contrasenia != newClinic.contrasenia) {
            console.log('contrasenia incorrecta');
            throw new common_1.BadRequestException("contrasenia incorrecta");
        }
        const { contrasenia, ...clinicaData } = newClinic;
        const payload = { newClinica: clinicaData };
        const token = await this.jwtService.signAsync(payload);
        return {
            access_token: token,
            clinica: clinicaData
        };
    }
    findOne(id) {
        return `This action returns a #${id} clinica`;
    }
    findOneByEmail(correoElectronico) {
        console.log('Looking for email:', correoElectronico);
        return this.clinicaRepository.findOneBy({ correoElectronico });
    }
    update(id, updateClinicaDto) {
        return `This action updates a #${id} clinica`;
    }
    remove(id) {
        return `This action removes a #${id} clinica`;
    }
};
exports.ClinicaService = ClinicaService;
exports.ClinicaService = ClinicaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(clinic_1.Clinica)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        jwt_1.JwtService])
], ClinicaService);
//# sourceMappingURL=clinica.service.js.map