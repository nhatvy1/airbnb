import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Room extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @CreateDateColumn()
    createdAt: Date

    @CreateDateColumn()
    updatedAt: Date

    @Column({ type: String, nullable: false })
    title: string

    @Column({ type: 'text', nullable: false })
    description: string
}