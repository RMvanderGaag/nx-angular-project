import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';

export class TokenMiddleware implements NestMiddleware {
    constructor(private authService: AuthService) { }
    async use(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.header('Authorization');
        if (!authHeader) throw new HttpException('No token provided', HttpStatus.UNAUTHORIZED);

        try {
            const token = await this.authService.verifyToken(authHeader);

            res.locals.token = token;
        } catch (e) {
            throw new HttpException('Token invalid!', HttpStatus.UNAUTHORIZED);
        }

        next();
    }
}