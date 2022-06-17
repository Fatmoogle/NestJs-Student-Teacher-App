import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

// The @controller decorator tells nest its a controller class
// @ApiTags puts everything under it as part of the Students controller
// for the Swagger docs in the browser
@ApiTags("Students")
@Controller('students')
export class StudentController {
    // "/students"
    @ApiOkResponse({})
    @Get()
    getStudents(): string {
        return "All students"
    }

    // "/students/:id"
    @Get("/:studentId")
    // We need a way to extract the ID to use it
    // We can use @Param() and pass it into the function as an argument 
    // You can specify what part of the params you want. In this case, student Id
    getStudentById(@Param("studentId") Id: string): string {   // params is an object with studentId property
        console.log(Id)
        return `get student with id of ${Id}`
        // Notice you can put at as any variable name you want
        // But inside Param(), you need the exact parameter being extracted (what is in the @Get decorater and route)
    }

    @Post()
    createStudent(@Body() bodyProperties): string {
        console.log(bodyProperties)   // Everything being sent in the body is in the body variable
        // Again, bodyProperties works, anything does. But if you want specific parts of the body,
        // you need to pass it into the @Body decorator like with Param
        return `Create student with the following data: ${JSON.stringify(bodyProperties)}`
    }

    @Put("/:studentId")
    updateStudent(@Param('studentId') studentId: string, @Body() body): string {
        // This function takes the param and body since we need both.
        return `update student with id of ${studentId}, with the following data: ${JSON.stringify(body)}`
    }

    // @Param('studentId) studentId
    // This essentially means extract 'studentId' from req.params
    // and place it into studentId variable.

}
