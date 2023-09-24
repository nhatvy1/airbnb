import { Controller } from '@nestjs/common'
import { appConfig } from 'src/config';
import { Get, Body, Param, Post, Put, Delete } from '@nestjs/common'
import { CreateRoleDto } from './RoleDto/create.role.dto';
import { RoleService } from './role.service';
import { RESPONSE_STATUS, Response } from 'src/utils/response';
import { Authorization } from 'src/decorators/authorization.decorators';
import { actionEnum } from 'src/entities/Permission';

@Controller(`${appConfig.BASE_URL}/roles`)
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    @Get('/init-role')
    async initRole() {
        try {
            const result = await this.roleService.initRole()

            return Response({
                message: 'Success',
                statusCode: RESPONSE_STATUS.SUCCESS
            })
        } catch(e) {
            throw e
        }
    }

    @Post()
    @Authorization('role', actionEnum.CREATE)
    async createRole(@Body() body: CreateRoleDto) {
        try {
            const result = await this.roleService.createRole(body)
            return Response({
                message: 'Success',
                statusCode: RESPONSE_STATUS.SUCCESS,
                result
            })
        } catch(e) {
            throw e
        }
    }

    @Put(':id')
    @Authorization('role', actionEnum.UPDATE)
    async updateRole(@Body() body: CreateRoleDto, @Param('id') id: number) {
        try {
            const result = await this.roleService.updateRole(id, body)
            return Response({
                message: 'Success',
                statusCode: RESPONSE_STATUS.SUCCESS,
                result
            })
        } catch(e) {
            throw e
        }
    }

    @Delete(':id')
    @Authorization('role', actionEnum.DELETE)
    async deleteRole(@Param('id') id: number) {
        try {
            await this.roleService.deleteRole(id)

            return Response({
                message: 'Success',
                statusCode: RESPONSE_STATUS.SUCCESS,
            })
        } catch(e) {
            throw e
        }
    }
}