import { BadRequestException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateClinicaDto } from './dto/create-clinica.dto';
import { Clinica } from 'src/entities/clinic';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateClinicaDto } from './dto/update-clinica.dto';
import { LoginPacienteDto } from 'src/paciente/dto/login-paciente.dto';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class ClinicaService { 
  
  constructor(@InjectRepository(Clinica) private readonly clinicaRepository: Repository<Clinica>,
private readonly jwtService: JwtService){}
  create(createClinicaDto: CreateClinicaDto) {
    
    const newClinic = this.clinicaRepository.create({...createClinicaDto})
    console.log("se creo exitosamente el paciente");
    return this.clinicaRepository.save(newClinic);
    
  }

  findAll() {
    return this.clinicaRepository.find();
  }

  async login(loginClinicaDto: LoginPacienteDto){
     const newClinic=await this.findOneByEmail(loginClinicaDto.correoElectronico);
        if(!newClinic){
          console.log("se encontro el email")
          throw new BadRequestException("Email incorrecto")
          
        }
        if(loginClinicaDto.contrasenia!=newClinic.contrasenia){
    
          console.log('contrasenia incorrecta')
          throw new BadRequestException("contrasenia incorrecta")
        }
        const { contrasenia, ...clinicaData } = newClinic;
      const payload = { newClinica: clinicaData };  // <-- Ensure payload structure
    
      const token = await this.jwtService.signAsync(payload); 
      return{
        access_token: token,
        clinica: clinicaData
      };
  }

  findOne(id: number) {
    return `This action returns a #${id} clinica`;
  }
  findOneByEmail(correoElectronico: string){
    console.log('Looking for email:', correoElectronico);
    return this.clinicaRepository.findOneBy({correoElectronico})
  }

  update(id: number, updateClinicaDto: UpdateClinicaDto) {
    return `This action updates a #${id} clinica`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinica`;
  }
}
