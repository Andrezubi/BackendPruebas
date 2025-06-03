import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Paciente } from '../entities/users'
import { Repository } from 'typeorm';
import { LoginPacienteDto } from './dto/login-paciente.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class PacienteService {

  constructor(@InjectRepository(Paciente) 
  private readonly pacieteRepository: Repository<Paciente>
,  private readonly jwtService: JwtService
){

  }

  create(createPacienteDto: CreatePacienteDto) {

    const newPaciente= this.pacieteRepository.create({...createPacienteDto});
    console.log("se creo exitosamente el paciente");
    return this.pacieteRepository.save(newPaciente);
    
  }

  findAll() {
    return this.pacieteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} paciente`;
  }
  findOneByEmail(correoElectronico: string){
    console.log('Looking for email:', correoElectronico);
    return this.pacieteRepository.findOneBy({correoElectronico });
  }
  
  async login(loginPacienteDto:LoginPacienteDto){
    const newPaciente=await this.findOneByEmail(loginPacienteDto.correoElectronico);
    if(!newPaciente){
      console.log("se encontro el email")
      throw new BadRequestException("Email incorrecto")

      
    }
    if(loginPacienteDto.contrasenia!=newPaciente.contrasenia){

      console.log('contrasenia incorrecta')
      throw new BadRequestException("contrasenia incorrecta")
    }
    const payload ={newPaciente}
    const token =await this.jwtService.signAsync(payload)
    return {token}

  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return `This action updates a #${id} paciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
