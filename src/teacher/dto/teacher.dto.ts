import { ApiProperty } from "@nestjs/swagger"

export class FindTeacherResponseDto {
    @ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty({ required: false })
    age?: number
}