import {
    Injectable,
    HttpStatus,
    HttpException,
    Inject,
    forwardRef,
} from '@nestjs/common'
import { User } from 'src/entities/User'
import { BaseService } from '../BaseModule/BaseModule'
import { Repository } from 'typeorm'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { RegisterDto } from './UserDto/register.dto'
import { hashSync, compareSync } from 'bcryptjs'
import { LoginDto } from './UserDto/login.dto'
import { RoleService } from '../RoleModule/role.service'
import { PermissionService } from '../PermissionModule/permission.service'
import { role } from 'src/constant/role'
import { mapPermission } from 'src/utils/permission'

@Injectable()
export class UserService extends BaseService<User> {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private readonly jwtService: JwtService,
        @Inject(forwardRef(() => RoleService))
        private readonly roleService: RoleService,
        private readonly permissionService: PermissionService
    ) {
        super(userRepository)
    }

    async login(data: LoginDto) {
        try {
            const result = await this.userRepository
                .createQueryBuilder()
                .where({ phone: data.phone })
                .addSelect(`${this.userRepository.metadata.name}.password`)
                .leftJoinAndSelect(
                    `${this.userRepository.metadata.name}.role`,
                    'roles'
                )
                .getOne()
            if (!result) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND)
            }

            const checkPassword = compareSync(data.password, result.password)
            if (!checkPassword) {
                throw new HttpException(
                    'Password is wrong',
                    HttpStatus.UNAUTHORIZED
                )
            }

            const permission = await this.permissionService.getPermissionByRole(
                result.role.id
            )

            const accessToken = await this.jwtService.signAsync(
                { userId: result.id },
                { expiresIn: '1d' }
            )
            delete result.password

            return {
                user: result,
                accessToken,
                permission: mapPermission(permission),
            }
        } catch (e) {
            throw e
        }
    }

    async register(data: RegisterDto) {
        try {
            const hash = hashSync(data.password, 10)

            const checkUserPhone = await this.userRepository.findOneBy({
                phone: data.phone,
            })
            if (checkUserPhone) {
                throw new HttpException(
                    'Phone number existed',
                    HttpStatus.BAD_REQUEST
                )
            }

            const checkEmail = await this.userRepository.findOneBy({
                email: data.email,
            })
            if (checkEmail) {
                throw new HttpException('Email existed', HttpStatus.BAD_REQUEST)
            }

            const findCustomerRole = await this.roleService.getRoleByName(
                role.USER
            )

            const dataToCreate = {
                ...data,
                password: hash,
                role: findCustomerRole,
            }

            const user = this.userRepository.create(dataToCreate)
            const returnUser = await this.userRepository.save(user, {
                reload: true,
            })

            delete returnUser.password

            return returnUser
        } catch (e) {
            throw e
        }
    }

    async deleteUser(id: number) {
        try {
            const user = await this.userRepository.findOne({
                where: { id: id },
            })

            await user.remove()
            return user
        } catch (e) {
            throw e
        }
    }

    async getUserById(id?: number) {
        if (!id) {
            return null
        }
        try {
            const user = await this.userRepository.findOne({
                where: { id: id },
                relations: ['role'],
            })
            if (!user) {
                throw new HttpException('User not found', HttpStatus.NOT_FOUND)
            }

            const findPermission =
                await this.permissionService.getPermissionByRole(user.role.id)

            return {
                ...user,
                permission: findPermission,
            }
        } catch (e) {
            throw e
        }
    }
}
