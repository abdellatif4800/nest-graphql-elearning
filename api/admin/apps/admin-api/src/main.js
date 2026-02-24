"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = handler;
const admin_api_module_1 = require("./admin-api.module");
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
let expressApp;
async function bootstrap() {
    if (!expressApp) {
        const app = await core_1.NestFactory.create(admin_api_module_1.AdminApiModule, {
            logger: new common_1.ConsoleLogger({ json: true, colors: true }),
        });
        app.enableCors();
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