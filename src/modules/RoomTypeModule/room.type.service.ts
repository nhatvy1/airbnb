import { Injectable } from "@nestjs/common";
import { BaseService } from "../BaseModule/BaseModule";
import { RoomType } from "./room.type.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class RoomTypeService extends BaseService<RoomType> {
  constructor(
    @InjectRepository(RoomType)
    private readonly roomTypeRepositoy: Repository<RoomType>
  ) {
    super(roomTypeRepositoy);
  }
}
