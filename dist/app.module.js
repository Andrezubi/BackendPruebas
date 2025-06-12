"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const typeorm_1 = require("@nestjs/typeorm");
const users_1 = require("./entities/users");
const specialty_1 = require("./entities/specialty");
const clinic_1 = require("./entities/clinic");
const report_1 = require("./entities/report");
const reserve_1 = require("./entities/reserve");
const shift_1 = require("./entities/shift");
const paciente_module_1 = require("./paciente/paciente.module");
const medico_module_1 = require("./medico/medico.module");
const jwt_1 = require("@nestjs/jwt");
const jwt_constant_1 = require("./constants/jwt.constant");
const administrador_module_1 = require("./administrador/administrador.module");
const reserva_module_1 = require("./reserva/reserva.module");
const clinica_module_1 = require("./clinica/clinica.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: '1234',
                database: 'saludtotaldb',
                synchronize: true,
                logging: true,
                entities: [users_1.Paciente, users_1.Medico, clinic_1.Clinica, report_1.ReporteMedico, reserve_1.Reserva, shift_1.TurnoMedico, specialty_1.Especialidad, users_1.Admin],
            }),
            paciente_module_1.PacienteModule,
            medico_module_1.MedicoModule,
            jwt_1.JwtModule.register({
                global: true,
                secret: jwt_constant_1.jwtConstants.secret,
                signOptions: { expiresIn: '1h' },
            }),
            administrador_module_1.AdministradorModule,
            reserva_module_1.ReservaModule,
            clinica_module_1.ClinicaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map