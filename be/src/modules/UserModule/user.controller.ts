import { Get, Delete, Post, Body, Controller, HttpStatus, Param, ParseIntPipe } from '@nestjs/common'
import { UserService } from './user.service'
import { RESPONSE_STATUS, Response } from 'src/utils/response'
import { appConfig } from 'src/config'
import { RegisterDto } from './UserDto/register.dto'
import { User } from 'src/entities/User'
import { LoginDto } from './UserDto/login.dto'
import { Authorization } from 'src/decorators/authorization.decorators'
import { actionEnum } from 'src/entities/Permission'

export type UserExcludePassword = Omit<User, 'password'>
@Controller(`${appConfig.BASE_URL}/users`)
export class UsersController {
    constructor(private userService: UserService) {}

    @Post('/login')
    async login(@Body() data: LoginDto) {
        try {
            const result = await this.userService.login(data)
            return Response({
                statusCode: RESPONSE_STATUS.SUCCESS,
                result,
                message: 'Login success',
            })
        } catch (e) {
            throw e
        }
    }

    @Post('/register')
    async register(@Body() data: RegisterDto) {
        const result = await this.userService.register(data)
        return Response<UserExcludePassword>({
            statusCode: RESPONSE_STATUS.SUCCESS,
            message: 'Register success',
            result: result,
        })
    }

    @Delete(':id')
    @Authorization('user', actionEnum.DELETE)
    async deleteUser(@Body() id: number) {
        try {
            const result = await this.userService.deleteUser(id)
            return Response<UserExcludePassword>({
                statusCode: RESPONSE_STATUS.SUCCESS,
                message: 'Delete user success',
                result: result,
            })
        } catch (e) {
            throw e
        }
    }

    @Get(':id')
    @Authorization('role', actionEnum.READ)
    async getUserById(@Param('id', ParseIntPipe) id: number) {
        try {
            const result = await this.userService.getUserById(id)
            return Response({
                message: 'Get user success',
                statusCode: RESPONSE_STATUS.SUCCESS,
                result
            })
        } catch(e) {
            throw e
        }
    }
}
