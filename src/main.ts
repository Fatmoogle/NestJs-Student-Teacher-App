import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {  // Starts the project
  // Creats the nest app
  // Passes in the root of our app, the AppModule
  const app = await NestFactory.create(AppModule);

  // @nestjs/swagger lets you build swagger API docs in the browser
  const config = new DocumentBuilder()
    .setTitle("Teacher/Student Application with Nest JS")  
    .setDescription("Simple Nest JS App to test framework")
    .setVersion("1.0.0")
    .build()

  // Create a document and pass in the app and config options
  const document = SwaggerModule.createDocument(app, config);

  // Set up the route for the swagger docs
  SwaggerModule.setup('/', app, document)
      
  // Runs the app on port 3000
  await app.listen(3000); 
}

// Controllers just handle the request and response.
// Services typically called by the controller,
// have the logic for manipulatin data or doing tasks. 
bootstrap();
