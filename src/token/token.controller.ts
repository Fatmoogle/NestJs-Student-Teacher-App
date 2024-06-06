import { Body, Controller, Get, Header, HttpCode, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TokenService } from './token.service';

// The @controller decorator tells nest its a controller class
// @ApiTags puts everything under it as part of the Students controller
// for the Swagger docs in the browser
@ApiTags("Token")
@Controller('token')
export class TokenController {
    constructor(private readonly tokenService: TokenService) {}

    @Get()
    // @Header('Content-Type', 'application/x-www-form-urlencoded')
    async getToken() {
        // Have service get token, then send token as reponse through here
        const token =  await this.tokenService.getToken();
        return token
    }

    // TEST
} 