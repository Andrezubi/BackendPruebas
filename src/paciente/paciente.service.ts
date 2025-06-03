import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Paciente } from '../entities/users'
import { Repository } from 'typeorm';

@Injectable()
export class PacienteService {

  constructor(@InjectRepository(Paciente) private pacieteRepository: Repository<Paciente>){

  }

  create(createPacienteDto: CreatePacienteDto) {
    const newPaciente= this.pacieteRepository.create({...createPacienteDto,fechaNac: new Date()});
    console.log("se creo exitosamente el paciente");
    return this.pacieteRepository.save(newPaciente);
    
  }

  findAll() {
    return this.pacieteRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} paciente`;
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    return `This action updates a #${id} paciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
