import { Injectable } from '@nestjs/common';
import { students } from  '../db'
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { v4 as uuid } from 'uuid'

@Injectable()
export class StudentService {
    private students = students

    getStudents(): FindStudentResponseDto[] {
        return this.students
    }

    getStudentById(studentId: string): FindStudentResponseDto {
        return this.students.find(student => {
            return student.id === studentId
        })
    }

    createStudent(data: CreateStudentDto): StudentResponseDto {
        let newStudent = {
            id: uuid(),
            name: "",
            teacher: ""
        }

        this.students.push(newStudent);

        return newStudent;
    }

    updateStudent(data: UpdateStudentDto, studentId: string): any  {
        let updatedStudent: StudentResponseDto;

        const updatedStudentList: any = this.students.map(student => {
            if(student.id === studentId) {
                updatedStudent = {
                    id: studentId,
                    ...data
                }
            } else {
                return student
            }

            this.students = updatedStudentList

            return updatedStudent
        })
    }
}