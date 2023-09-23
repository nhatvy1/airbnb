import { IsNotEmpty } from 'class-validator'

export class RoomDto {
    @IsNotEmpty({ message: 'Không được để trống tiêu đề' })
    title: string

    @IsNotEmpty({ message: 'Không được để trống mô trả phòng' })
    description: string
}
