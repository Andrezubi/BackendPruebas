import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva, EstadoReserva } from 'src/entities/reserve';
import { Paciente, Medico } from 'src/entities/users';
import { Clinica } from 'src/entities/clinic';
import { CreateReservaDto } from './dto/create-reserva.dto';


@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepo: Repository<Reserva>,
    @InjectRepository(Paciente)
    private readonly pacienteRepo: Repository<Paciente>,
    @InjectRepository(Medico)
    private readonly medicoRepo: Repository<Medico>,
    @InjectRepository(Clinica)
    private readonly clinicaRepo: Repository<Clinica>,
  ) {}

  // reserva.service.ts
  async actualizarEstado(id: string, nuevoEstado: EstadoReserva): Promise<Reserva> {
  const reserva = await this.reservaRepo.findOne({ where: { id } });

  if (!reserva) {
    throw new NotFoundException(`Reserva con id ${id} no encontrada`);
  }

  reserva.estado = nuevoEstado;
  return this.reservaRepo.save(reserva);
}

  async createReserva(dto: CreateReservaDto) {
    const paciente = await this.pacienteRepo.findOneBy({ ci: dto.ciPaciente });
    const medico = await this.medicoRepo.findOneBy({ ci: dto.ciMedico });
    const clinica = await this.clinicaRepo.findOneBy({ nombre: dto.nombreClinica });

    if (!paciente) throw new NotFoundException(`Paciente no encontrado: ${dto.ciPaciente}`);
    if (!medico) throw new NotFoundException(`Médico no encontrado: ${dto.ciMedico}`);
    if (!clinica) throw new NotFoundException(`Clínica no encontrada: ${dto.nombreClinica}`);

    const reserva = this.reservaRepo.create({
      paciente,
      medico,
      clinica,
      horaInicio: dto.horaInicio,
      horaFin: dto.horaFin,
      fecha: dto.fecha,
    });

    return this.reservaRepo.save(reserva);
  }
}

/*import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { UpdateReservaDto } from './dto/update-reserva.dto';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private readonly reservaRepo: Repository<Reserva>,
  ) {}

  async create(createReservaDto: CreateReservaDto) {
    const reserva = this.reservaRepo.create(createReservaDto);
    return this.reservaRepo.save(reserva);
  }

  async findAll() {
    return this.reservaRepo.find({
      relations: ['paciente', 'medico', 'clinica'], // opcional, si necesitas traer relaciones
    });
  }

  async findOne(id: string) {
    const reserva = await this.reservaRepo.findOne({
      where: { id },
      relations: ['paciente', 'medico', 'clinica'],
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return reserva;
  }

  async update(id: string, updateReservaDto: UpdateReservaDto) {
    const reserva = await this.reservaRepo.preload({
      id,
      ...updateReservaDto,
    });
    if (!reserva) throw new NotFoundException('Reserva no encontrada');
    return this.reservaRepo.save(reserva);
  }

  async remove(id: string) {
    const reserva = await this.findOne(id);
    return this.reservaRepo.remove(reserva);
  }
}*/
