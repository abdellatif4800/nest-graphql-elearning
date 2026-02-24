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
exports.FileStorageAdminController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_storage_service_1 = require("./file-storage.service");
let FileStorageAdminController = class FileStorageAdminController {
    fileStorageService;
    constructor(fileStorageService) {
        this.fileStorageService = fileStorageService;
    }
    async createBucket(bucketName) {
        return this.fileStorageService.createBuckt(bucketName);
    }
    bucketsList() {
        return this.fileStorageService.bucketsList();
    }
    makeBucketPublic(bucketName) {
        return this.fileStorageService.makeBucketPublic(bucketName);
    }
    uploadFile(file, bucketName, fileName) {
        return this.fileStorageService.uploadFile(file, bucketName, fileName);
    }
};
exports.FileStorageAdminController = FileStorageAdminController;
__decorate([
    (0, common_1.Post)('createBuckt'),
    __param(0, (0, common_1.Body)('bucketName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FileStorageAdminController.prototype, "createBucket", null);
__decorate([
    (0, common_1.Get)('listBuckets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FileStorageAdminController.prototype, "bucketsList", null);
__decorate([
    (0, common_1.Post)('makeBucketPublic/:bucketName'),
    __param(0, (0, common_1.Param)('bucketName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileStorageAdminController.prototype, "makeBucketPublic", null);
__decorate([
    (0, common_1.Post)('uploadFile'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file')),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('bucketName')),
    __param(2, (0, common_1.Body)('fileName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String]),
    __metadata("design:returntype", void 0)
], FileStorageAdminController.prototype, "uploadFile", null);
exports.FileStorageAdminController = FileStorageAdminController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [file_storage_service_1.FileStorageService])
], FileStorageAdminController);
//# sourceMappingURL=file-storage.admin.controller.js.map