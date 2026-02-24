import { NestFactory } from '@nestjs/core';
import { UserApiModule } from './user-api.module';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { IncomingMessage, ServerResponse } from 'http';

let expressApp: any;

async function bootstrap() {
  if (!expressApp) {
    // Create Nest app but do NOT listen on a port
    const app = await NestFactory.create(UserApiModule, {
      logger: new ConsoleLogger({ json: true, colors: true }),
    });

    // Middlewares
    const cookieParser = await import('cookie-parser');
    app.use(cookieParser.default());

    app.enableCors({
      origin: ['http://localhost:3001', 'http://localhost:3000'],
      credentials: true,
    });

    app.useGlobalPipes(
      new ValidationPipe({ whitelist: false, transform: true }),
    );

    // Initialize but don't listen
    await app.init();

    // Grab underlying Express instance
    expressApp = app.getHttpAdapter().getInstance();
  }

  return expressApp;
}

// Vercel serverless handler
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  const app = await bootstrap();
  return app(req, res);
}
