import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico } from '../entities/users';
import { Repository } from 'typeorm';
export declare class MedicoService {
    private medicoRepository;
    constructor(medicoRepository: Repository<Medico>);
    create(createMedicoDto: CreateMedicoDto): Promise<Medico>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateMedicoDto: UpdateMedicoDto): string;
    remove(id: number): string;
}
