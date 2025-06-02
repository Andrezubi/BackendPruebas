import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,OneToMany,JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Paciente,Medico } from "./users";;
import { Clinica } from "./clinic";

export enum EstadoReserva {
  EN_CURSO = "en curso",
  RESERVADO = "reservado",
  NO_ATENDIDO = "no atendido",
}

@Entity() 
  
export class Reserva{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @ManyToOne(() => Medico, (medico) => medico.reservas) // note: we will create author property in the Photo class below
    medicos: Medico[]
    
    @ManyToOne(() => Paciente, (paciente) => paciente.reservas) // note: we will create author property in the Photo class below
    pacientes: Paciente[]

    @ManyToOne(() => Clinica, (clinica) => clinica.reservas)
    clinica: Clinica

    @Column({
    type: "enum",
    enum: EstadoReserva,
    default: EstadoReserva.RESERVADO,
    })
    estado: EstadoReserva;

    @Column({ type: 'time' })
    horaInicio: string;

    @Column({ type: 'time' })
    horaFin: string;

    @Column()
    fecha: Date
}