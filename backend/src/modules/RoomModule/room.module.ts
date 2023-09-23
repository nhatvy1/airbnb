import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Room } from "src/entities/Room";
import { RoomController } from "./room.controller";
import { RoomService } from "./room.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([Room])
    ],
    controllers: [RoomController],
    providers: [RoomService],
    exports: [RoomService]
})
export class RoomModule {}