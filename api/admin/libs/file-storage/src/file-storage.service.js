"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStorageService = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("../../common/src");
const Minio = __importStar(require("minio"));
const slugify_1 = __importDefault(require("slugify"));
let FileStorageService = class FileStorageService {
    minioService;
    constructor(minioService) {
        this.minioService = minioService;
    }
    async createBuckt(bucketName) {
        await this.minioService.makeBucket(bucketName);
        console.log('Bucket created successfully.');
    }
    async bucketsList() {
        return await this.minioService.listBuckets();
    }
    async makeBucketPublic(bucketName) {
        const policy = {
            Version: '2012-10-17',
            Statement: [
                {
                    Sid: 'PublicRead',
                    Effect: 'Allow',
                    Principal: '*',
                    Action: ['s3:GetObject'],
                    Resource: [`arn:aws:s3:::${bucketName}/*`],
                },
            ],
        };
        await this.minioService.setBucketPolicy(bucketName, JSON.stringify(policy));
        const getPolicy = await this.minioService.getBucketPolicy(bucketName);
        return getPolicy;
        console.log(`Bucket policy file: ${getPolicy}`);
    }
    async listObjectsInBucket(bucketName) {
        const data = [];
        const stream = this.minioService.listObjects(bucketName, '', true);
        for await (const obj of stream) {
            data.push(obj);
        }
        return data;
    }
    async getFile(filename, bucketName) {
        return await this.minioService.presignedGetObject(bucketName, filename, 3600);
    }
    async uploadFile(file, bucketName, fileName) {
        const slugFileName = (0, slugify_1.default)(fileName);
        const safeFileName = `${slugFileName}.jpg`;
        await this.minioService.putObject(bucketName, safeFileName, file.buffer, file.size, function (err, etag) {
            return console.log(err, etag);
        });
        return this.getFile(safeFileName, bucketName);
    }
};
exports.FileStorageService = FileStorageService;
exports.FileStorageService = FileStorageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_2.InjectMinio)()),
    __metadata("design:paramtypes", [Minio.Client])
], FileStorageService);
//# sourceMappingURL=file-storage.service.js.map