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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcryptjs"));
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const common_2 = require("../../common/src");
const console_1 = require("console");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
let UsersService = class UsersService {
    usersRepo;
    jwtService;
    constructor(usersRepo, jwtService) {
        this.usersRepo = usersRepo;
        this.jwtService = jwtService;
    }
    async create(createUserInput) {
        const existingUser = await this.usersRepo.findOne({
            where: {
                email: createUserInput.email,
            },
        });
        if (existingUser)
            throw new common_1.ConflictException('Email already in use');
        const hashdPass = await bcrypt.hash(createUserInput.password, 10);
        const newUser = this.usersRepo.create({
            username: createUserInput.username,
            email: createUserInput.email,
            password: hashdPass,
            isBlocked: false,
            role: common_2.UserRole.USER,
            createdAt: new Date(),
        });
        return await this.usersRepo.save(newUser);
    }
    findAll() {
        return `This action returns all users`;
    }
    async findUser(findUser) {
        const targetUser = await this.usersRepo.findOne({
            where: {
                email: findUser.email,
                role: common_2.UserRole.USER,
            },
        });
        if (!targetUser)
            throw new common_1.UnauthorizedException('no use with this email');
        const isPasswordMatch = await bcrypt.compare(findUser.password, targetUser.password);
        const payload = {
            sub: targetUser.id,
            username: targetUser.username,
            role: common_2.UserRole.USER,
            email: targetUser.email,
        };
        if (isPasswordMatch)
            return { access_token: await this.jwtService.signAsync(payload) };
    }
    async getUserFromToken(token) {
        const payload = this.jwtService.verify(token);
        (0, console_1.log)(payload);
        return payload;
    }
    update(id, updateUserInput) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.Users)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map