import {
    Injectable,
    CanActivate,
    ExecutionContext,
    UnauthorizedException,
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/modules/UserModule/user.service'
import { Request } from 'express'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private readonly userService: UserService
    ) {}

    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? []
        return type === 'Bearer' ? token : undefined
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest()
        const token = this.extractTokenFromHeader(request)

        if (!token) {
            // throw new UnauthorizedException()
        }

        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: process.env.JWT_AIRBNB || 'test',
            })

            if (!payload.userId) {
                throw new UnauthorizedException()
            }
            // 💡 We're assigning the payload to the request object here
            // so that we can access it in our route handlers
            const user = await this.userService.getUserById(payload.userId)
            if (!user) {
                throw new UnauthorizedException()
            }
            request['user'] = user
        } catch (e) {
            console.log(e)
            throw new UnauthorizedException()
        }

        return true
    }
}
