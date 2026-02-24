"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const core_1 = require("@nestjs/core");
const user_api_module_1 = require("./user-api.module");
const common_1 = require("@nestjs/common");
let expressApp;
async function bootstrap() {
    if (!expressApp) {
        const app = await core_1.NestFactory.create(user_api_module_1.UserApiModule, {
            logger: new common_1.ConsoleLogger({ json: true, colors: true }),
        });
        const cookieParser = await import('cookie-parser');
        app.use(cookieParser.default());
        app.enableCors({
            origin: ['http://localhost:3001', 'http://localhost:3000'],
            credentials: true,
        });
        app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: false, transform: true }));
        await app.init();
        expressApp = app.getHttpAdapter().getInstance();
    }
    return expressApp;
}
async function handler(req, res) {
    try {
        const app = await bootstrap();
        return app(req, res);
    }
    catch (err) {
        console.error('NestJS Serverless Error:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
    }
}
//# sourceMappingURL=main.js.map