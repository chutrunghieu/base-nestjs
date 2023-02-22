import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ValidationError } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    disableErrorMessages: false,
    exceptionFactory: (errors: ValidationError[]) => "Fucking error"
  }));
  await app.listen(3000);
}
bootstrap();
