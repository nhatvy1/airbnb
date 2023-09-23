import { IsNotEmpty } from 'class-validator'

export class LoginDto {
    @IsNotEmpty({ message: 'Không được để trống số điện thoại' })
    phone: string

    @IsNotEmpty({ message: 'Không được để trống số mật khẩu' })
    password: string
}
