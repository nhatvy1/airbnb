import { Module, forwardRef } from "@nestjs/common";
import { RoleModule } from "../RoleModule/role.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PermissionModule } from "../PermissionModule/permission.module";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { GoogleStrategy } from "./utils/GoogleStrategy";
import { SessionSerializer } from "./utils/Serializer";
import { User } from "../UserModule/user.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        forwardRef(() => RoleModule),
        PermissionModule,
    ],
    controllers: [AuthController],
    providers: [
        GoogleStrategy,
        SessionSerializer,
        { provide: "AUTH_SERVICE", useClass: AuthService },
    ],
})
export class AuthModule {}
