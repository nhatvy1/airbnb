import { Controller, Get } from "@nestjs/common";
import { appConfig } from "src/config";
import { RoomTypeService } from "./room.type.service";

@Controller(`${appConfig.BASE_URL}/room-types`)
export class RoomTypeController {
    constructor(private roomTypeService: RoomTypeService) {}

    @Get()
    getRoomType() {
        return { msg: 'dsada'}
    }
}