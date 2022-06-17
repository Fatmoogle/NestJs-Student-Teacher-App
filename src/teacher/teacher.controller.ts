import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Teachers")
@Controller('teachers')
export class TeacherController {
    @Get()
    getTeachers(): string {
        return "all teachers"
    }

    @Get("/:teacherId")
    getTeacherById(@Param("teacherId") teacherId: string): string {
        return "Teacher by id"
    }

}
