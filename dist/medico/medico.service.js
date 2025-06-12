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
    constructor(medicoRepository, jwtService) {
        this.medicoRepository = medicoRepository;
        this.jwtService = jwtService;
    }
    create(createMedicoDto) {
        const newMedico = this.medicoRepository.create({ ...createMedicoDto });
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
        jwt_1.JwtService])
], MedicoService);
//# sourceMappingURL=medico.service.js.map