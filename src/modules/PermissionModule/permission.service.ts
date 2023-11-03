import { Injectable } from '@nestjs/common'
import { BaseService } from '../BaseModule/BaseModule'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Permission, actionEnum } from './permission.entity'
import { Role } from '../RoleModule/role.entity'

@Injectable()
export class PermissionService extends BaseService<Permission> {
    constructor(
        @InjectRepository(Permission)
        private readonly permissionRepository: Repository<Permission>
    ) {
        super(permissionRepository)
    }

    async addPermission({
        action,
        key,
        role,
    }: {
        action: actionEnum
        key: string
        role: Role
    }) {
        try {
            const permission = await this.permissionRepository.findOneBy({
                subject: key,
                action: action,
                role: { id: role.id },
            })


            // if (permission) {
            //     console.log('Da ton tai')
            //     return permission
            // } else {
                const checkExistPermission =
                    await this.permissionRepository.findOne({
                        where: { action: action, subject: key },
                        relations: { role: true },
                    })

                if (checkExistPermission) {
                    checkExistPermission.role = [
                        ...(checkExistPermission?.role || []),
                        role,
                    ]
                    await checkExistPermission.save()
                    return checkExistPermission
                } else {
                    const newPermission = this.permissionRepository.create({
                        action,
                        subject: key,
                    })
                    newPermission.role = [...(newPermission?.role || []), role]
                    await newPermission.save()
                    return newPermission
                }
            // }
        } catch (e) {
            throw e
        }
    }

    async getPermissionByRole(id: number) {
        try {
            const rolePermission = await this.permissionRepository.find({
                where: { role: { id: id } },
            })

            return rolePermission
        } catch (e) {
            throw e
        }
    }
}
