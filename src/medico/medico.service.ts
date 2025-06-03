import { Injectable } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Medico } from '../entities/users'
import { Repository } from 'typeorm';


@Injectable()
export class MedicoService {
  constructor(@InjectRepository(Medico) private medicoRepository: Repository<Medico>){

  }

  create(createMedicoDto: CreateMedicoDto) {
    const newMedico= this.medicoRepository.create({...createMedicoDto,fechaNac: new Date()});
    return this.medicoRepository.save(newMedico);
    
  }

  findAll() {
    return `This action returns all medico`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medico`;
  }

  update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return `This action updates a #${id} medico`;
  }

  remove(id: number) {
    return `This action removes a #${id} medico`;
  }
}
