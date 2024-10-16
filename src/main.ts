import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Asi podemos usar el pipe de validacion para todos los endpoints
  app.useGlobalPipes(new ValidationPipe({
    // Asi podemos forzar a que solo se acepten los campos que esten definidos en el DTO
    whitelist: true,
    // Asi podemos forzar a que no se acepten campos que no esten definidos en el DTO
    forbidNonWhitelisted: true,
    // Asi podemos transformar los tipos de datos a los que estan definidos en el DTO
    transform: true
  }));

  await app.listen(3000);
}
bootstrap();
