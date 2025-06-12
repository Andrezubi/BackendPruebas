"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClinicaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_clinica_dto_1 = require("./create-clinica.dto");
class UpdateClinicaDto extends (0, mapped_types_1.PartialType)(create_clinica_dto_1.CreateClinicaDto) {
}
exports.UpdateClinicaDto = UpdateClinicaDto;
//# sourceMappingURL=update-clinica.dto.js.map