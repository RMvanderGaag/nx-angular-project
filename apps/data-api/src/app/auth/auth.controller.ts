import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async registerUser(@Body('email') email: string, @Body('password') password: string) {
        try {
            await this.authService.registerUser(email, password);

            return {
                id: await this.authService.createUser(email)
            }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }

    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string) {
        try {
            return {
                token: await this.authService.generateToken(email, password)
            }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }
    }
}