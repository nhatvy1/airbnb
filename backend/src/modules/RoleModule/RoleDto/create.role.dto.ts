import { IsNotEmpty } from 'class-validator'

export class CreateRoleDto {
    @IsNotEmpty({ message: 'Tên quyền không được để trống' })
    name: string

    @IsNotEmpty({ message: 'Phân quyền không được để trống' })
    permissions: { [key: string]: string[] }
}
