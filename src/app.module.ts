import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserModule } from './modules/UserModule/user.module'
import { User } from './modules/UserModule/user.entity'
import { RoleModule } from './modules/RoleModule/role.module'
import { PermissionModule } from './modules/PermissionModule/permission.module'
import { Role } from './modules/RoleModule/role.entity'
import { Permission } from './modules/PermissionModule/permission.entity'
import { Room } from './modules/RoomModule/room.entity'
import { RoomModule } from './modules/RoomModule/room.module'
import { AuthModule } from './modules/AuthModule/auth.module'
import { PassportModule } from '@nestjs/passport'
import { RoomType } from './modules/RoomTypeModule/room.type.entity'
import { RoomTypeModule } from './modules/RoomTypeModule/room.type.module'
import typeormConfig from './config/typeorm.config'
import { DemoModule } from './modules/DemoModule/demo.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({ useFactory: typeormConfig }),
		AuthModule,
		UserModule,
		RoleModule,
		PermissionModule,
		RoomModule,
		RoomTypeModule,
		DemoModule,
		PassportModule.register({ session: true }),
		JwtModule.register({
			global: true,
			secret: process.env.JWT_AIRBNB,
			signOptions: { expiresIn: '1d' },
		}),
	],
	providers: [],
})
export class AppModule {}
