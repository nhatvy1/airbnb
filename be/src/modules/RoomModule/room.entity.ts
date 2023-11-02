import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { RoomType } from "../RoomTypeModule/room.type.entity";

@Entity()
export class Room extends BaseEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @Column({ type: String, nullable: false })
  title: string;

  @Column({ type: "text", nullable: false })
  description: string;

  @Column({ type: Number, nullable: true })
  basePrice: number;

  @Column("text", { array: true, default: "{}" })
  images: string[];

  @ManyToOne(() => RoomType, (roomType) => roomType.id, { 
    onDelete:"SET NULL"
  })
  @JoinColumn({ name: "roomType" })
  roomType: RoomType;
}
