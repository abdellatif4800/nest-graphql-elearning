"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminApiController = void 0;
const common_1 = require("@nestjs/common");
const admin_api_service_1 = require("./admin-api.service");
const terminus_1 = require("@nestjs/terminus");
let AdminApiController = class AdminApiController {
    adminApiService;
    health;
    http;
    constructor(adminApiService, health, http) {
        this.adminApiService = adminApiService;
        this.health = health;
        this.http = http;
    }
    async check() {
        try {
            const result = await this.health.check([
                () => this.http.pingCheck('api-test', 'http://localhost:8001/adminApi/health/ping'),
            ]);
            common_1.Logger.log('Api is UP');
            return result;
        }
        catch (error) {
            common_1.Logger.error('API is DOWN', error.stack);
            throw error;
        }
    }
    ping() {
        return { status: 'ok' };
    }
};
exports.AdminApiController = AdminApiController;
__decorate([
    (0, common_1.Get)('apiCheck'),
    (0, terminus_1.HealthCheck)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminApiController.prototype, "check", null);
__decorate([
    (0, common_1.Get)('ping'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AdminApiController.prototype, "ping", null);
exports.AdminApiController = AdminApiController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [admin_api_service_1.AdminApiService,
        terminus_1.HealthCheckService,
        terminus_1.HttpHealthIndicator])
], AdminApiController);
//# sourceMappingURL=admin-api.controller.js.map