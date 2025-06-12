import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,OneToMany,JoinColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Medico,Paciente } from "./users";
import { Reserva } from "./reserve";
import { TurnoMedico} from "./shift";



@Entity()
export class Clinica{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    nombre: string

    @Column()
    contrasenia:string

    @Column()
    correoElectronico: string

    @OneToMany(() => Paciente, (paciente) => paciente.clinica) // note: we will create author property in the Photo class below
    pacientes: Paciente[]

    @OneToMany(() => Reserva, (reserva) => reserva.clinica) // note: we will create author property in the Photo class below
    reservas: Reserva[]

    @OneToMany(() => TurnoMedico, (turno) => turno.clinica) // note: we will create author property in the Photo class below
    turnos: TurnoMedico[]

    @Column()
    ubicacion: string

    @Column()
    telefono: number

    @OneToMany(() => Medico, (medico) => medico.clinica) 
    medicos: Medico[]
}
