import { Body, Controller, Get, Header, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TokenDto } from 'src/token/dto/token.dto';
import { CreateStudentDto, FindStudentResponseDto, StudentResponseDto, UpdateStudentDto } from './dto/student.dto';
import { StudentService } from './student.service';

// The @controller decorator tells nest its a controller class
// @ApiTags puts everything under it as part of the Students controller
// for the Swagger docs in the browser
@ApiTags("Students")
@Controller('students')
export class StudentController {
    constructor(private readonly studentService: StudentService) {
        
    }


    // "/students"
    @ApiOkResponse({})
    @Get()
    getStudents(): FindStudentResponseDto[] {
        return this.studentService.getStudents();
    }

    // "/students/:id"
    @Get("/:studentId")
    // We need a way to extract the ID to use it
    // We can use @Param() and pass it into the function as an argument 
    // You can specify what part of the params you want. In this case, student Id
    getStudentById(@Param("studentId") Id: string): FindStudentResponseDto {   // params is an object with studentId property
        console.log(Id)
        return this.studentService.getStudentById(Id)
        // Notice you can put at as any variable name you want
        // But inside Param(), you need the exact parameter being extracted (what is in the @Get decorater and route)
    }

    @Post()
    // @Header('Content-Type', 'application/json')
    createStudent(@Body() bodyProperties: CreateStudentDto): FindStudentResponseDto {
        console.log(bodyProperties)   // Everything being sent in the body is in the body variable
        // Again, bodyProperties works, anything does. But if you want specific parts of the body,
        // you need to pass it into the @Body decorator like with Param
        return this.studentService.createStudent(bodyProperties)
    }

    @Put("/:studentId")
    updateStudent(@Param('studentId') studentId: string, @Body() body: UpdateStudentDto): StudentResponseDto {
        // This function takes the param and body since we need both.
        return this.studentService.updateStudent(body, studentId)
    }

    // @Param('studentId) studentId
    // This essentially means extract 'studentId' from req.params
    // and place it into studentId variable.

    @Post("test")
    test(@Body() test: TokenDto) {
        
    }
}
 