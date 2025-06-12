import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {Medico } from '../entities/users'
import { Repository } from 'typeorm';
import { LoginMedicoDto } from './dto/login-medico.dto';
import { JwtService } from '@nestjs/jwt';
import { Clinica } from 'src/entities/clinic';
import { Especialidad } from 'src/entities/specialty';


@Injectable()
export class MedicoService {
  constructor(@InjectRepository(Medico) 
  private readonly medicoRepository: Repository<Medico>
,  private readonly jwtService: JwtService,
@InjectRepository(Clinica) private readonly clinicaRepository: Repository<Clinica>,
@InjectRepository(Especialidad) private readonly especialidadesRepository: Repository<Especialidad>
){}

  async create(createMedicoDto: CreateMedicoDto) {
    const clinica=await this.clinicaRepository.findOneBy({nombre:createMedicoDto.clinica})
    const especialidad=await this.especialidadesRepository.findOneBy({nombre:createMedicoDto.especialidad})
    if(!especialidad) throw new NotFoundException(`Especialidad invalida: ${createMedicoDto.especialidad}`)

    if (!clinica) throw new NotFoundException(`Clínica no encontrada: ${createMedicoDto.clinica}`);
    
    const newMedico= this.medicoRepository.create({
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

  findOne(id: number) {
    return `This action returns a #${id} medico`;
  }

  findOneByEmail(correoElectronico: string){
    console.log('Looking for email:', correoElectronico);
    return this.medicoRepository.findOneBy({correoElectronico });
  }

    async login(loginMedicoDto:LoginMedicoDto){
      const newMedico=await this.findOneByEmail(loginMedicoDto.correoElectronico);
      if(!newMedico){
        console.log("se encontro el email")
        throw new BadRequestException("Email incorrecto")
  
        
      }
      if(loginMedicoDto.contrasenia!=newMedico.contrasenia){
  
        console.log('contrasenia incorrecta')
        throw new BadRequestException("contrasenia incorrecta")
      }
      const payload ={newMedico}
      const token =await this.jwtService.signAsync(payload)
      return {token}
  
    }

    update(id: number, updateMedicoDto: UpdateMedicoDto) {
    return `This action updates a #${id} medico`;
  }

  remove(id: number) {
    return `This action removes a #${id} medico`;
  }
}
