import { Module, forwardRef } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Role } from 'src/entities/Role'
import { RoleService } from './role.service'
import { RoleController } from './role.controller'
import { PermissionModule } from '../PermissionModule/permission.module'
import { UserModule } from '../UserModule/user.module'

@Module({
    imports: [
        TypeOrmModule.forFeature([Role]),
        PermissionModule,
        forwardRef(()=> UserModule)
    ],
    exports: [RoleService],
    controllers: [RoleController],
    providers: [RoleService]
})
export class RoleModule {}
