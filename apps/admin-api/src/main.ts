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

// Serverless handler for Vercel
export default async function handler(
  req: IncomingMessage,
  res: ServerResponse,
) {
  const app = await bootstrap();
  return app(req, res);
}

// import { AdminApiModule } from './admin-api.module';
// import { NestFactory } from '@nestjs/core';
// import { ConsoleLogger, ValidationPipe, Logger } from '@nestjs/common';
//
// async function bootstrap() {
//   const app = await NestFactory.create(AdminApiModule, {
//     logger: new ConsoleLogger({
//       json: true,
//       colors: true,
//     }),
//   });
//   app.enableCors();
//
//   // ---------------
//   app.useGlobalPipes(new ValidationPipe({ whitelist: false, transform: true }));
//   // ---------------
//
//   // ---------------
//   const port = process.env.ADMIN_PORT!;
//
//   await app.listen(port);
//
//   Logger.log(`🚀 Admin Api is running on: http://localhost:${port} `);
// }
// bootstrap();
