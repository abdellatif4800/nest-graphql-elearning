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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserApiController = void 0;
require("dotenv");
const common_1 = require("@nestjs/common");
const user_api_service_1 = require("./user-api.service");
const genai_1 = require("@google/genai");
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GOOGLE_CLOUD_PROJECT = process.env.GOOGLE_CLOUD_PROJECT;
const GOOGLE_CLOUD_LOCATION = process.env.GOOGLE_CLOUD_LOCATION;
let UserApiController = class UserApiController {
    userApiService;
    constructor(userApiService) {
        this.userApiService = userApiService;
    }
    async root(res) {
        const ai = new genai_1.GoogleGenAI({ vertexai: false, apiKey: GEMINI_API_KEY });
        const response = await ai.models.generateContent({
            model: 'gemini-2.0-flash',
            contents: 'why is the sky blue?',
        });
        console.debug(response.text);
    }
};
exports.UserApiController = UserApiController;
__decorate([
    (0, common_1.Post)('/testAi'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserApiController.prototype, "root", null);
exports.UserApiController = UserApiController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [user_api_service_1.UserApiService])
], UserApiController);
//# sourceMappingURL=user-api.controller.js.map