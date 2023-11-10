import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Permission } from 'src/modules/PermissionModule/permission.entity'
import { Role } from 'src/modules/RoleModule/role.entity'
import { Room } from 'src/modules/RoomModule/room.entity'
import { RoomType } from 'src/modules/RoomTypeModule/room.type.entity'
import { User } from 'src/modules/UserModule/user.entity'

export default (): TypeOrmModuleOptions => ({
	type: 'postgres',
	host: process.env.POSTGRES_HOST,
	port: parseInt(process.env.POSTGRES_PORT),
	username: process.env.POSTGRES_USER,
	password: process.env.POSTGRES_PASSWORD,
	database: process.env.POSTGRES_DATABASE,
	entities: [User, Role, Permission, Room, RoomType],
	autoLoadEntities: true,
	synchronize: true,
})
