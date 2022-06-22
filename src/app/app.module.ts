import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { StudentController } from 'src/student/student.controller';
import { StudentService } from 'src/student/student.service';
// import { StudentTeacherController } from 'src/teacher/student.controller';
// import { TeacherController } from 'src/teacher/teacher.controller';
import { TokenController } from 'src/token/token.controller';
import { TokenService } from 'src/token/token.service';

// Here is where you specify what controllers will be used
// along with 
@Module({
  imports: [HttpModule],
  // controllers takes in an array of controllers we want to use
  controllers: [StudentController, TokenController],
  providers: [StudentService, TokenService]
})

export class AppModule {}
