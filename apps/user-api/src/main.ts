import { NestFactory } from '@nestjs/core';
import { UserApiModule } from './user-api.module';
import { ConsoleLogger, Logger, ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(UserApiModule, {
    logger: new ConsoleLogger({
      json: true,
      colors: true,
    }),
  });

  app.use(cookieParser.default());

  app.enableCors({
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    credentials: true,
  });

  // ---------------
  app.useGlobalPipes(new ValidationPipe({ whitelist: false, transform: true }));

  // ---------------
  const port = process.env.PORT!;

  await app.listen(port);

  Logger.log(`🚀 Public/Users Api is running on: http://localhost:${port} `);
}
bootstrap();
