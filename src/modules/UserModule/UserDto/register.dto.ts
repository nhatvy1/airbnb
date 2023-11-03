import { IsNotEmpty } from 'class-validator'

export class RegisterDto {
    @IsNotEmpty({ message: 'Email người dùng không được bỏ trống' })
    email: string

    @IsNotEmpty({ message: 'Tên người dùng không được bỏ trống' })
    fullName: string

    @IsNotEmpty({ message: 'Mật khẩu người dùng không được bỏ trống' })
    password: string

    @IsNotEmpty({ message: 'Số điện thoại không được bỏ trống' })
    phone: string
}
