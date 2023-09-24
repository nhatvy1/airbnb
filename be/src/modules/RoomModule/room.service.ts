import { Injectable } from '@nestjs/common'
import { Room } from 'src/entities/Room'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseService } from '../BaseModule/BaseModule'
import { RoomDto } from './RoomDto/RoomDto'

@Injectable()
export class RoomService extends BaseService<Room> {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>
    ) {
        super(roomRepository)
    }

    async getRoom() {
        return { msg: 'Get room success' }
    }

    async createRoom(data: RoomDto) {
        try {
            const room = this.roomRepository.create(data)
            const result = await this.roomRepository.save(room)

            return result
        } catch(e) {
            throw e
        }
    }
}
