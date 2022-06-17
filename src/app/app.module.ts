import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentTeacherController } from 'src/teacher/student.controller';
import { TeacherController } from 'src/teacher/teacher.controller';

// Here is where you specify what controllers will be used
// along with 
@Module({
  imports: [],
  // controllers takes in an array of ontrollers we want to use
  controllers: [StudentController, TeacherController, StudentTeacherController]  
})

export class AppModule {}
