import { Module, forwardRef } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersController } from "./user.controller";
import { UserService } from "./user.service";
import { RoleModule } from "../RoleModule/role.module";
import { PermissionModule } from "../PermissionModule/permission.module";
import { User } from "./user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        forwardRef(()=> RoleModule),
        PermissionModule
    ],
    controllers: [UsersController],
    providers: [UserService],
    exports: [UserService]
})
export class UserModule {}