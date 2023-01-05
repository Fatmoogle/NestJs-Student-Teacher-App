import { ApiProperty } from "@nestjs/swagger"

export class CreateStudentDto {
    @ApiProperty()
    name?: string

    @ApiProperty({required: false})
    teacher?: string

    // @ApiProperty({ required: false })
    // age?: number
}

export class UpdateStudentDto {
    @ApiProperty()
    name: string

    @ApiProperty({required: false})
    teacher?: string
}

export class FindStudentResponseDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    name: string

    @ApiProperty({required: false})
    teacher?: string
}

export class StudentResponseDto {
    @ApiProperty()
    id: string

    @ApiProperty()
    name: string

    @ApiProperty({required: false})
    teacher?: string
} 