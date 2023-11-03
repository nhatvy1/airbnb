import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-google-oauth20";
import { AuthService } from "../auth.service";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject("AUTH_SERVICE")
        private readonly authService: AuthService
    ) {
        super({
            clientID:
                "234229197390-e0a44u9qcp458ofnn39qohjhuj0f35vk.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:5000/api/v1/auth/google/redirect",
            scope: ["profile", "email"],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile
    ) {
        console.log("Access token: ", accessToken);
        console.log("Access refreshToken: ", refreshToken);
        console.log("Access profile: ", profile);
        const user = await this.authService.validateUser({ 
            email: profile.emails[0].value, 
            fullName: profile.displayName
        });

        return user || null;
    }
}
