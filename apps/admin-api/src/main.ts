import { NestFactory } from '@nestjs/core';
import { AdminApiModule } from './admin-api.module';
import { ConsoleLogger, ValidationPipe, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AdminApiModule, {
    logger: new ConsoleLogger({
      json: true,
      colors: true,
    }),
  });
  app.enableCors();

  // ---------------
  app.useGlobalPipes(new ValidationPipe({ whitelist: false, transform: true }));
  // ---------------

  // ---------------
  const port = process.env.ADMIN_PORT!;

  await app.listen(port);

  Logger.log(`🚀 Admin Api is running on: http://localhost:${port} `);
}
bootstrap();
