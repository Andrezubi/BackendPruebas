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
exports.AdministradorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_1 = require("../entities/users");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
let AdministradorService = class AdministradorService {
    administradorRepository;
    jwtService;
    constructor(administradorRepository, jwtService) {
        this.administradorRepository = administradorRepository;
        this.jwtService = jwtService;
    }
    create(createAdministradorDto) {
        const newMedico = this.administradorRepository.create({ ...createAdministradorDto });
        return this.administradorRepository.save(newMedico);
    }
    findAll() {
        return `This action returns all administrador`;
    }
    findOne(id) {
        return `This action returns a #${id} administrador`;
    }
    findOneByEmail(correoElectronico) {
        console.log('Looking for email:', correoElectronico);
        return this.administradorRepository.findOneBy({ correoElectronico });
    }
    async login(loginAdministradorDto) {
        const newAdministrador = await this.findOneByEmail(loginAdministradorDto.correoElectronico);
        if (!newAdministrador) {
            console.log("se encontro el email");
            throw new common_1.BadRequestException("Email incorrecto");
        }
        if (loginAdministradorDto.contrasenia != newAdministrador.contrasenia) {
            console.log('contrasenia incorrecta');
            throw new common_1.BadRequestException("contrasenia incorrecta");
        }
        const payload = { newAdministrador };
        const token = await this.jwtService.signAsync(payload);
        return { token };
    }
    update(id, updateAdministradorDto) {
        return `This action updates a #${id} administrador`;
    }
    remove(id) {
        return `This action removes a #${id} administrador`;
    }
};
exports.AdministradorService = AdministradorService;
exports.AdministradorService = AdministradorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AdministradorService);
//# sourceMappingURL=administrador.service.js.map