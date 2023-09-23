import { Injectable, NotFoundException } from '@nestjs/common'
import { BaseService } from '../BaseModule/BaseModule'
import { Role } from 'src/entities/Role'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { PermissionService } from '../PermissionModule/permission.service'
import { CreateRoleDto } from './RoleDto/create.role.dto'
import { actionEnum } from 'src/entities/Permission'
import { role } from 'src/constant/role'

@Injectable()
export class RoleService extends BaseService<Role> {
    constructor(
        @InjectRepository(Role)
        private readonly roleRepository: Repository<Role>,
        private readonly permissionService: PermissionService
    ) {
        super(roleRepository)
    }

    async initRole() {
        try {
            const admin = this.roleRepository.create({ name: role.ADMIN })
            const adminRole = await this.roleRepository.save(admin)
            await this.permissionService.addPermission({
                key: 'all',
                action: actionEnum.MANAGE,
                role: admin
            })

            const staff = this.roleRepository.create({ name: role.STAFF })
            await this.roleRepository.save(staff)
            
            const user = this.roleRepository.create({ name: role.USER })
            await this.repository.save(user)
            
            return { message: 'Init role Success' }
        } catch(e) {
            throw e
        }
    }

    async createRole({ name, permissions }: CreateRoleDto) {
        try {
            console.log('Check name: ', name)
            console.log('Check permissions: ', permissions)

            const result = this.roleRepository.create({ name })
            const role = await this.roleRepository.save(result)

            for (const key of Object.keys(permissions)) {
                permissions[key].forEach(async (action: actionEnum) => {
                    this.permissionService.addPermission({ action, key, role })
                })
            }
            return role
        } catch (e) {
            throw e
        }
    }

    async updateRole(id: number, { name, permissions }: CreateRoleDto) {
        const result = await this.roleRepository.findOne({
            where: { id: id },
            relations: { permission: { role: true } },
        })
        if (!result) {
            throw new NotFoundException()
        }

        let permissionCurrent = [...result.permission]
        result.name = name;
        await result.save()

        for (const key of Object.keys(permissions)) {
            permissions[key].forEach(async (action: actionEnum)=> {
                this.permissionService.addPermission({ action, key, role: result})
                permissionCurrent = permissionCurrent.filter(
                    (p)=> !(p.action === action && p.subject === key)
                )
            })
        }

        permissionCurrent.forEach(async (permission)=> {
            (role)=> role.id !== result.id
            await permission.save()
        })

        return result ? result : role;
    }

    async deleteRole(id: number) {
        try {
            const role = await this.roleRepository.findOneBy({ id })
            if (!role) {
                throw new NotFoundException('Không tìm thấy quyền hạn')
            }

            await role.remove()
            return role;
        } catch(e) {
            throw e
        }
    }

    async getRoleByName(name: string) {
        try {
            const role = await this.roleRepository.findOneBy({ name })
            return role
        } catch (e) {
            throw e
        }
    }
}
