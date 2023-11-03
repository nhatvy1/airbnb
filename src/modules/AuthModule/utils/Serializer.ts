import { Inject } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "../auth.service";
import { User } from "src/modules/UserModule/user.entity";

export class SessionSerializer extends PassportSerializer {
    constructor(
        @Inject('AUTH_SERVICE')
        private readonly authService: AuthService
    ) {
        super()
    }

    serializeUser(user: User, done: Function) {
        done(null, user)
    }

    async deserializeUser(payload: any, done: Function) {
        const user = await this.authService.findUser(payload.id);
        console.log('Deserialize User');
        console.log(user);
        return user ? done(null, user) : done(null, null);
      }
}