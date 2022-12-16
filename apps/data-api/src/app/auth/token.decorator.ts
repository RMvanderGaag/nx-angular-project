import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface Token {
    email: string,
    id: string,
}

export const InjectToken = createParamDecorator(
    (_data: unknown, ctx: ExecutionContext) => {
        const response = ctx.switchToHttp().getResponse();
        console.log(response.locals.token);
        return response.locals.token;
    },
);