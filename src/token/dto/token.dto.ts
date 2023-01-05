import { ApiProperty } from "@nestjs/swagger"

export class TokenDto {
    @ApiProperty()
    name: string
    
    @ApiProperty()
    age: string
}

