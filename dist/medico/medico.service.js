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
exports.MedicoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_1 = require("../entities/users");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
let MedicoService = class MedicoService {
    medicoRepository;
    jwtService;
    clinicaRepository;
    especialidadesRepository;
    constructor(medicoRepository, jwtService, clinicaRepository, especialidadesRepository) {
        this.medicoRepository = medicoRepository;
        this.jwtService = jwtService;
        this.clinicaRepository = clinicaRepository;
        this.especialidadesRepository = especialidadesRepository;
    }
    async create(createMedicoDto) {
        const clinica = await this.clinicaRepository.findOneBy({ nombre: createMedicoDto.clinica });
        const especialidad = await this.especialidadesRepository.findOneBy({ nombre: createMedicoDto.especialidad });
        if (!especialidad)
            throw new common_1.NotFoundException(`Especialidad invalida: ${createMedicoDto.especialidad}`);
        if (!clinica)
            throw new common_1.NotFoundException(`Clínica no encontrada: ${createMedicoDto.clinica}`);
        const newMedico = this.medicoRepository.create({
            ci: createMedicoDto.ci,
            nombre: createMedicoDto.nombre,
            apellido: createMedicoDto.apellido,
            contrasenia: createMedicoDto.contrasenia,
            fechaNac: createMedicoDto.fechaNac,
            estadoCivil: createMedicoDto.estadoCivil,
            direccion: createMedicoDto.direccion,
            correoElectronico: createMedicoDto.correoElectronico,
            tipoSangre: createMedicoDto.tipoSangre,
            telefono: createMedicoDto.telefono,
            lugarNac: createMedicoDto.lugarNac,
            genero: createMedicoDto.genero,
            clinica,
            especialidad
        });
        return this.medicoRepository.save(newMedico);
    }
    findAll() {
        return `This action returns all medico`;
    }
    findOne(id) {
        return `This action returns a #${id} medico`;
    }
    findOneByEmail(correoElectronico) {
        console.log('Looking for email:', correoElectronico);
        return this.medicoRepository.findOneBy({ correoElectronico });
    }
    async login(loginMedicoDto) {
        const newMedico = await this.findOneByEmail(loginMedicoDto.correoElectronico);
        if (!newMedico) {
            console.log("se encontro el email");
            throw new common_1.BadRequestException("Email incorrecto");
        }
        if (loginMedicoDto.contrasenia != newMedico.contrasenia) {
            console.log('contrasenia incorrecta');
            throw new common_1.BadRequestException("contrasenia incorrecta");
        }
        const payload = { newMedico };
        const token = await this.jwtService.signAsync(payload);
        return { token };
    }
    update(id, updateMedicoDto) {
        return `This action updates a #${id} medico`;
    }
    remove(id) {
        return `This action removes a #${id} medico`;
    }
};
exports.MedicoService = MedicoService;
exports.MedicoService = MedicoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_1.Medico)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MedicoService);
//# sourceMappingURL=medico.service.js.map