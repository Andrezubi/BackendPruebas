import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAdministradorDto } from './dto/create-administrador.dto';
import { UpdateAdministradorDto } from './dto/update-administrador.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from 'src/entities/users';
import { Repository } from 'typeorm';
import { LoginAdministradorDto } from './dto/login-administrador.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AdministradorService {
  constructor(@InjectRepository(Admin)
  private readonly administradorRepository: Repository<Admin>,
  private readonly jwtService: JwtService
){}
  create(createAdministradorDto: CreateAdministradorDto) {
    const newMedico= this.administradorRepository.create({...createAdministradorDto});
    return this.administradorRepository.save(newMedico);
  }

  findAll() {
    return `This action returns all administrador`;
  }

  findOne(id: number) {
    return `This action returns a #${id} administrador`;
  }

  findOneByEmail(correoElectronico: string){
    console.log('Looking for email:', correoElectronico);
    return this.administradorRepository.findOneBy({correoElectronico });
  }

    async login(loginAdministradorDto:LoginAdministradorDto){
      const newAdministrador=await this.findOneByEmail(loginAdministradorDto.correoElectronico);
      if(!newAdministrador){
        console.log("se encontro el email")
        throw new BadRequestException("Email incorrecto")
  
        
      }
      if(loginAdministradorDto.contrasenia!=newAdministrador.contrasenia){
  
        console.log('contrasenia incorrecta')
        throw new BadRequestException("contrasenia incorrecta")
      }
      const payload ={newAdministrador}
      const token =await this.jwtService.signAsync(payload)
      return {token}
  
    }

  update(id: number, updateAdministradorDto: UpdateAdministradorDto) {
    return `This action updates a #${id} administrador`;
  }

  remove(id: number) {
    return `This action removes a #${id} administrador`;
  }
}
