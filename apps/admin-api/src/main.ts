import { AdminApiModule } from './admin-api.module';
import { NestFactory } from '@nestjs/core';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // Create the NestJS application
  const app = await NestFactory.create(AdminApiModule, {
    logger: new ConsoleLogger({ json: true, colors: true }),
  });

  // Enable CORS
  app.enableCors();

  // Use global validation pipe
  app.useGlobalPipes(new ValidationPipe({ whitelist: false, transform: true }));

  // Start listening on a port
  const port = process.env.ADMIN_PORT || 3000;
  await app.listen(port);

  console.log(`Admin API is running on http://localhost:${port}`);
}

bootstrap();
