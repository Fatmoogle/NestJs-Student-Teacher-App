// import { Controller, Get, Param, Post, Put } from '@nestjs/common';
// import { ApiTags } from '@nestjs/swagger';
// import { FindStudentResponseDto } from 'src/student/dto/student.dto';

// @ApiTags("Student/Teacher")
// @Controller('teachers/:teacherId/students')
// export class StudentTeacherController { 

//     @Get()
//     getStudentsByTeacher(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
//         return this
//     }

//     // @Post()
//     // createTeacher(): string {
//     //     return "Create teacher"
//     // }

//     @Put("/:teacherId")
//     updateStudentsTeacher(
//             @Param('teacherId') teacherId: string,
//             @Param('studentId') studentId: string
//         ): FindStudentResponseDto {
//         return `update student with id of ${studentId} to teacher with Id of ${teacherId}`
//     }

// }
