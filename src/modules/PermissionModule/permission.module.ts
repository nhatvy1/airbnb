import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionService } from './permission.service';
import { PermissionController } from './permission.controller';
import { Permission } from './permission.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Permission])],
    providers: [PermissionService],
    controllers: [PermissionController],
    exports: [PermissionService]
})
export class PermissionModule {}