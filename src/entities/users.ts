import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,ManyToOne, OneToMany } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Clinica } from "./clinic";
import { ReporteMedico } from "./report";
import { Reserva } from "./reserve";
import { TurnoMedico } from "./shift";
import { Especialidad } from "./specialty";

@Entity()
export class Paciente{
    @PrimaryGeneratedColumn("uuid")
    id: string
    @Column({unique:true})
    ci:number
    @Column()
    nombre: string
    @Column()
    apellido: string
    @Column()
    contrasenia:string
    @Column()
    fechaNac: string
    @Column({default:false})
    penalizado: boolean
    @Column()
    estadoCivil: string
    @Column()
    direccion: string
    @Column({unique:true})
    correoElectronico: string
    @Column()
    tipoSangre: string
    @Column()
    telefono: number
    @Column()
    lugarNac: string
    @Column()
    genero : string
    @OneToMany(() => ReporteMedico, (reporte) => reporte.pacientes)
    reporte: ReporteMedico; 
    @ManyToOne(() => Clinica, (clinica) => clinica.pacientes)
    clinica: Clinica
    @OneToMany(() => Reserva, (reserva) => reserva.paciente) // note: we will create author property in the Photo class below
    reservas: Reserva[]
}

@Entity()
export class Medico {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({unique:true})
    ci:number

    @Column()
    nombre: string

    @Column()
    apellido: string

    @Column()
    contrasenia:string

    @ManyToOne(() => Clinica, (clinica) => clinica.medicos)
    clinica: Clinica

    @Column()
    fechaNac: string
    
    @Column()
    penalizado: boolean

    @Column()
    estadoCivil: string

    @Column()
    direccion: string

    @Column()
    correoElectronico: string

    @Column()
    tipoSangre: string

    @Column()
    telefono: number

    @Column()
    lugarNac: string

    @Column()
    genero : string

    @OneToMany(() => ReporteMedico, (reporte) => reporte.medicos)
    reportes: ReporteMedico[];

    @ManyToOne(() => TurnoMedico, (turno) => turno.medicos)
    turno: TurnoMedico;

    @ManyToOne(() => Especialidad, (especialidad) => especialidad.medicos)
    especialidad: Especialidad;

    @OneToMany(() => Reserva, (reserva) => reserva.medico) // note: we will create author property in the Photo class below
    reservas: Reserva[]

}




@Entity()
export class Admin {
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({unique:true})
    ci:number

    @Column()
    nombre: string

    @Column()
    apellido: string
    @Column()
    contrasenia:string

    @Column()
    rol:string

    @Column()
    fechaNac: string
    
    @Column()
    estadoCivil: string

    @Column()
    direccion: string

    @Column()
    correoElectronico: string

    @Column()
    tipoSangre: string

    @Column()
    telefono: number

    @Column()
    lugarNac: string

    @Column()
    genero : string


}