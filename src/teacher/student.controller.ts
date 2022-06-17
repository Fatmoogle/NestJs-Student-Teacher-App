import { Controller, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Student/Teacher")
@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    @Get()
    getStudentsByTeacher(): string {
        return "student by teacher"
    }

    // @Post()
    // createTeacher(): string {
    //     return "Create teacher"
    // }

    @Put("/:teacherId")
    updateStudentsTeacher(): string {
        return "update teacher"
    }

}
