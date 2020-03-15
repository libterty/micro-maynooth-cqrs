import { NestFactory } from '@nestjs/core';
import { ValidationPipe, Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { config } from '../config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const validationOptions = {
    skipMissingProperties: true,
    validationError: { target: false },
  };
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.setGlobalPrefix(config.PREFIX);
  app.enableCors({ origin: true });
  await app.listen(config.PORT, config.HOST);
  Logger.log(`Server listening on port ${config.PORT}`, 'Bootstrap');
}
bootstrap();
