import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './modules/UserModule/user.module'
import { User } from './entities/User'
import { RoleModule } from './modules/RoleModule/role.module';
import { PermissionModule } from './modules/PermissionModule/permission.module';
import { Role } from './entities/Role';
import { Permission } from './entities/Permission';
import { Room } from './entities/Room';
import { RoomModule } from './modules/RoomModule/room.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            entities: [User, Role, Permission, Room],
            synchronize: true,
            // logging: true,
        }),
        UserModule,
        RoleModule,
        PermissionModule,
        RoomModule,
        JwtModule.register({
            global: true,
            secret: process.env.JWT_AIRBNB,
            // signOptions: { expiresIn: '60s' },
          }),
    ],
    providers: [],
})
export class AppModule {}
