import { Controller, Get, Req, UseGuards } from "@nestjs/common";
import { appConfig } from "src/config";
import { GoogleAuthGuard } from "./utils/Guards";
import { Request } from "express";

@Controller(`${appConfig.BASE_URL}/auth`)
export class AuthController {
    @Get("/google/login")
    @UseGuards(GoogleAuthGuard)
    loginGoogle() {
        return { msg: "Login google authentication" };
    }

    // api/v1/auth/google/redirect
    @Get("/google/redirect")
    @UseGuards(GoogleAuthGuard)
    handleRedirect() {
        return {
            msg: "ok",
        };
    }

    @Get("status")
    user(@Req() request: Request) {
        console.log(request.user);
        if (request.user) {
            return { msg: "Authenticated" };
        } else {
            return { msg: "Not Authenticated" };
        }
    }
}
