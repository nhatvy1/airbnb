import { Get, Post, Body, Controller } from '@nestjs/common'
import { RESPONSE_STATUS, Response } from 'src/utils/response'
import { RoomDto } from './RoomDto/RoomDto'
import { appConfig } from 'src/config'
import { RoomService } from './room.service'

@Controller(`${appConfig.BASE_URL}/rooms`)
export class RoomController {
    constructor(private roomService: RoomService) {}

    @Get()
    async getRoom() {
        return Response({ 
            message: 'success',
            statusCode: RESPONSE_STATUS.SUCCESS
        })
    }

    @Post()
    async createRoom(@Body() data: RoomDto) {
        console.log('Check body: ', data)
        const result = await this.roomService.createRoom(data)
        return Response({
            message: 'Create room success',
            statusCode: RESPONSE_STATUS.SUCCESS,
            result
        })
    }
}