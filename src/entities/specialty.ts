import { Column,Entity,ForeignKey,PrimaryColumn,PrimaryGeneratedColumn,OneToMany,JoinColumn } from "typeorm";
import { UUID } from "typeorm/driver/mongodb/bson.typings";
import { Medico } from "./users";



@Entity()
export class Especialidad{
    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    nombre: string
    @Column()
    descripcion: string

    @OneToMany(() => Medico, (medico) => medico.especialidad)
        medicos: Medico[];
}