import {
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm'
import { Permission } from '../PermissionModule/permission.entity'

@Entity()
export class Role extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ unique: true })
    name: string

    @ManyToMany(() => Permission, (permission) => permission.role, {
        onDelete: 'CASCADE',
    })
    @JoinTable({ name: 'role_permission' })
    permission: Permission[]
}
