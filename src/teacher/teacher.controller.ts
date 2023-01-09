// import { Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
// import { ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
// import { FindTeacherResponseDto } from './dto/teacher.dto'

// @ApiTags("Teachers")
// @Controller('teachers')
// export class TeacherController {
//     @Get()
//     getTeachers(): FindTeacherResponseDto[] {
//         return "all teachers"
//     }

//     // Nest automatically serializes as json when returning data.
//     // only if they are objects or arrays. Primitives stay whatever they are
//     @ApiResponse({type: TeacherDto})    // Says the reponse should be TeacherDTO type for this route in docs
//     @HttpCode(200) 
//     @Get("/:teacherId")
//     getTeacherById(@Param("teacherId") teacherId: number): FindTeacherResponseDto {
//         return {id: teacherId}
//     }

// } 
