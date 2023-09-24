import { BaseEntity, Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Role } from "./Role";

export enum actionEnum {
    MANAGE = 'manage',
    CREATE = 'create',
    READ = 'read',
    UPDATE = 'update',
    DELETE = 'delete'
}

@Entity()
export class Permission extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, type: String })
    subject: string

    @Column({ nullable: false, type: 'enum', enum: actionEnum })
    action: actionEnum

    @ManyToMany(()=> Role, (role)=> role.permission)
    role: Role[]
}