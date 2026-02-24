import { AdminApiModule } from './admin-api.module';
import { NestFactory } from '@nestjs/core';
import { ConsoleLogger, ValidationPipe } from '@nestjs/common';
import { IncomingMessage, ServerResponse } from 'http';

let expressApp: any;

async function bootstrap() {
  if (!expressApp) {
    // Create NestJS app without listening on a port
    const app = await NestFactory.create(AdminApiModule, {
      logger: new ConsoleLogger({ json: true, colors: true }),
    });

    // Enable CORS
    app.enableCors();

    // Global pipes
    app.useGlobalPipes(
      new ValidationPipe({ whitelist: false, transform: true }),
    );

    // Initialize app (required before using serverless)
    await app.init();

    // Grab underlying Express instance
    expressApp = app.getHttpAdapter().getInstance();
  }

  return expressApp;
}

// Serverless handler for Verce
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  try {
    const app = await bootstrap();
    return app(req, res);
  } catch (err) {
    console.error('NestJS Serverless Error:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
