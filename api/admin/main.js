/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminApiModule = void 0;
const common_1 = __webpack_require__(2);
const admin_api_controller_1 = __webpack_require__(3);
const admin_api_service_1 = __webpack_require__(4);
const apollo_1 = __webpack_require__(6);
const graphql_1 = __webpack_require__(7);
const terminus_1 = __webpack_require__(5);
const config_1 = __webpack_require__(8);
const path_1 = __webpack_require__(9);
const tutorials_management_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(14);
const users_managment_1 = __webpack_require__(17);
const src_1 = __webpack_require__(43);
let AdminApiModule = class AdminApiModule {
};
exports.AdminApiModule = AdminApiModule;
exports.AdminApiModule = AdminApiModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: (0, path_1.join)(process.cwd(), './schema.gql'),
                sortSchema: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('POSTGRES_HOST'),
                    port: configService.get('POSTGRES_PORT'),
                    username: configService.get('POSTGRES_USER'),
                    password: configService.get('POSTGRES_PASSWORD'),
                    database: configService.get('POSTGRES_DATABASE'),
                    autoLoadEntities: true,
                    synchronize: true,
                }),
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            terminus_1.TerminusModule,
            users_managment_1.UsersModule.register('admin'),
            tutorials_management_1.TutorialsModule.register('admin'),
            src_1.FileStorageModule.register('admin'),
        ],
        controllers: [admin_api_controller_1.AdminApiController],
        providers: [
            admin_api_service_1.AdminApiService,
        ],
    })
], AdminApiModule);


/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminApiController = void 0;
const common_1 = __webpack_require__(2);
const admin_api_service_1 = __webpack_require__(4);
const terminus_1 = __webpack_require__(5);
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
    __metadata("design:paramtypes", [typeof (_a = typeof admin_api_service_1.AdminApiService !== "undefined" && admin_api_service_1.AdminApiService) === "function" ? _a : Object, typeof (_b = typeof terminus_1.HealthCheckService !== "undefined" && terminus_1.HealthCheckService) === "function" ? _b : Object, typeof (_c = typeof terminus_1.HttpHealthIndicator !== "undefined" && terminus_1.HttpHealthIndicator) === "function" ? _c : Object])
], AdminApiController);


/***/ }),
/* 4 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AdminApiService = void 0;
const common_1 = __webpack_require__(2);
let AdminApiService = class AdminApiService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AdminApiService = AdminApiService;
exports.AdminApiService = AdminApiService = __decorate([
    (0, common_1.Injectable)()
], AdminApiService);


/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/terminus");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/apollo");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/graphql");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(11), exports);
__exportStar(__webpack_require__(15), exports);
__exportStar(__webpack_require__(36), exports);


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TutorialsModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TutorialsModule = void 0;
const common_1 = __webpack_require__(2);
const tutorials_service_1 = __webpack_require__(12);
const typeorm_1 = __webpack_require__(14);
const tutorial_entity_1 = __webpack_require__(15);
const tutorials_admin_resolver_1 = __webpack_require__(37);
const tutorials_resolver_1 = __webpack_require__(41);
const roadmap_entity_1 = __webpack_require__(36);
let TutorialsModule = TutorialsModule_1 = class TutorialsModule {
    static register(mode) {
        const resolver = mode === 'public' ? [tutorials_resolver_1.TutorialsResolver] : [tutorials_admin_resolver_1.TutorialsAdminResolver];
        return {
            module: TutorialsModule_1,
            providers: resolver,
        };
    }
};
exports.TutorialsModule = TutorialsModule;
exports.TutorialsModule = TutorialsModule = TutorialsModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([tutorial_entity_1.Tutorial, tutorial_entity_1.Unit, roadmap_entity_1.Roadmap])],
        providers: [tutorials_service_1.TutorialsService],
    })
], TutorialsModule);


/***/ }),
/* 12 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TutorialsService = void 0;
const common_1 = __webpack_require__(2);
const console_1 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(14);
const tutorial_entity_1 = __webpack_require__(15);
const typeorm_2 = __webpack_require__(16);
let TutorialsService = class TutorialsService {
    tutorialRepo;
    unitRepo;
    constructor(tutorialRepo, unitRepo) {
        this.tutorialRepo = tutorialRepo;
        this.unitRepo = unitRepo;
    }
    async create(createTutorialInput) {
        const newTutorial = this.tutorialRepo.create({
            ...createTutorialInput,
            createdAt: new Date(),
            publish: true,
            units: createTutorialInput.units?.map((unit) => ({
                ...unit,
                createdAt: new Date(),
                publish: false,
            })),
        });
        (0, console_1.log)(newTutorial);
        return await this.tutorialRepo.save(newTutorial);
    }
    async findAll(filters) {
        const qb = this.tutorialRepo
            .createQueryBuilder('tutorial')
            .leftJoinAndSelect('tutorial.units', 'unit')
            .leftJoinAndSelect('tutorial.author', 'author');
        if (filters?.publish) {
            qb.andWhere('tutorial.publish = :publish', {
                publish: filters.publish,
            });
        }
        if (filters?.authorId) {
            qb.andWhere('tutorial.authorId = :authorId', {
                authorId: filters.authorId,
            });
        }
        if (filters?.levels?.length) {
            qb.andWhere('tutorial.level IN (:...levels)', { levels: filters.levels });
        }
        if (filters?.tutorialName) {
            qb.andWhere('tutorial.tutorialName ILIKE :tutorialName', {
                tutorialName: `%${filters.tutorialName}%`,
            });
        }
        if (filters?.categories?.length) {
            qb.andWhere('tutorial.category IN (:...categories)', {
                categories: filters.categories,
            });
        }
        if (filters?.createdAfter) {
            qb.andWhere('tutorial.createdAt >= :createdAfter', {
                createdAfter: filters.createdAfter,
            });
        }
        if (filters?.createdBefore) {
            qb.andWhere('tutorial.createdAt <= :createdBefore', {
                createdBefore: filters.createdBefore,
            });
        }
        qb.orderBy('tutorial.createdAt', 'DESC').addOrderBy('unit.order', 'ASC');
        return qb.getMany();
    }
    async findOne(id) {
        const tutorial = await this.tutorialRepo
            .createQueryBuilder('tutorial')
            .where('tutorial.id=:id', { id: id })
            .leftJoinAndSelect('tutorial.units', 'unit')
            .leftJoinAndSelect('tutorial.author', 'author')
            .orderBy('tutorial.createdAt', 'DESC')
            .addOrderBy('unit.order', 'ASC')
            .getOne();
        if (!tutorial) {
            throw new Error(`Tutorial with id ${id} not found`);
        }
        const unitsTitlesList = tutorial.units
            ?.map((unit) => unit.unitTitle)
            .filter((title) => !!title) || [];
        return { ...tutorial, unitsTitlesList };
    }
    async update(id, updateTutorialInput) {
        const tutorial = await this.tutorialRepo.preload({
            ...updateTutorialInput,
        });
        console.log(tutorial);
        if (!tutorial) {
            throw new Error(`Tutorial with id ${id} not found`);
        }
        return this.tutorialRepo.save(tutorial);
    }
    remove(id) {
        return `This action removes a #${id} tutorial`;
    }
};
exports.TutorialsService = TutorialsService;
exports.TutorialsService = TutorialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tutorial_entity_1.Tutorial)),
    __param(1, (0, typeorm_1.InjectRepository)(tutorial_entity_1.Unit)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object])
], TutorialsService);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("console");

/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 15 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Unit = exports.Tutorial = void 0;
const typeorm_1 = __webpack_require__(16);
const users_managment_1 = __webpack_require__(17);
const roadmap_entity_1 = __webpack_require__(36);
let Tutorial = class Tutorial {
    id;
    tutorialName;
    description;
    level;
    thumbnail;
    category;
    author;
    roadmaps;
    authorId;
    units;
    publish;
    createdAt;
    updatedAt;
};
exports.Tutorial = Tutorial;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Tutorial.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tutorial.prototype, "tutorialName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Tutorial.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tutorial.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tutorial.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tutorial.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_managment_1.Users, (user) => user.tutorials, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({ name: 'authorId' }),
    __metadata("design:type", typeof (_a = typeof users_managment_1.Users !== "undefined" && users_managment_1.Users) === "function" ? _a : Object)
], Tutorial.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => roadmap_entity_1.Roadmap, (roadmap) => roadmap.tutorials),
    __metadata("design:type", Array)
], Tutorial.prototype, "roadmaps", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Tutorial.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Unit, (unit) => unit.tutorial, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Tutorial.prototype, "units", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Tutorial.prototype, "publish", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ default: new Date() }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Tutorial.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Tutorial.prototype, "updatedAt", void 0);
exports.Tutorial = Tutorial = __decorate([
    (0, typeorm_1.Entity)('tutorials')
], Tutorial);
let Unit = class Unit {
    id;
    unitTitle;
    content;
    order;
    tutorialId;
    publish;
    tutorial;
    createdAt;
    updatedAt;
};
exports.Unit = Unit;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Unit.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Unit.prototype, "unitTitle", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Unit.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Unit.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid', nullable: true }),
    __metadata("design:type", String)
], Unit.prototype, "tutorialId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Unit.prototype, "publish", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Tutorial, (tutorial) => tutorial.units, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'tutorialId' }),
    __metadata("design:type", Tutorial)
], Unit.prototype, "tutorial", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Unit.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Unit.prototype, "updatedAt", void 0);
exports.Unit = Unit = __decorate([
    (0, typeorm_1.Entity)('units')
], Unit);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 17 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(18), exports);
__exportStar(__webpack_require__(19), exports);
__exportStar(__webpack_require__(21), exports);
__exportStar(__webpack_require__(33), exports);


/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UsersModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(2);
const users_service_1 = __webpack_require__(19);
const users_resolver_1 = __webpack_require__(30);
const users_admin_resolver_1 = __webpack_require__(35);
const user_entity_1 = __webpack_require__(21);
const typeorm_1 = __webpack_require__(14);
const config_1 = __webpack_require__(8);
const jwt_1 = __webpack_require__(28);
let UsersModule = UsersModule_1 = class UsersModule {
    static register(mode) {
        const resolver = mode === 'public' ? [users_resolver_1.UsersResolver] : [users_admin_resolver_1.UsersAdminResolver];
        return {
            module: UsersModule_1,
            providers: resolver,
        };
    }
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = UsersModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([user_entity_1.Users]),
            jwt_1.JwtModule.registerAsync({
                global: true,
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => ({
                    secret: config.get('JWT_SECRET'),
                    signOptions: { expiresIn: '15m' },
                }),
            }),
        ],
        providers: [users_resolver_1.UsersResolver, users_service_1.UsersService],
    })
], UsersModule);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(2);
const bcrypt = __importStar(__webpack_require__(20));
const typeorm_1 = __webpack_require__(14);
const user_entity_1 = __webpack_require__(21);
const common_2 = __webpack_require__(22);
const console_1 = __webpack_require__(13);
const typeorm_2 = __webpack_require__(16);
const jwt_1 = __webpack_require__(28);
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
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], UsersService);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Users = void 0;
const common_1 = __webpack_require__(22);
const tutorials_management_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(16);
let Users = class Users {
    id;
    username;
    email;
    password;
    isBlocked;
    role;
    tutorials;
    roadmaps;
    createdAt;
    updatedAt;
};
exports.Users = Users;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Users.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Users.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], Users.prototype, "isBlocked", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: common_1.UserRole,
        default: common_1.UserRole.USER,
    }),
    __metadata("design:type", typeof (_a = typeof common_1.UserRole !== "undefined" && common_1.UserRole) === "function" ? _a : Object)
], Users.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tutorials_management_1.Tutorial, (tutorial) => tutorial.author),
    __metadata("design:type", Array)
], Users.prototype, "tutorials", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tutorials_management_1.Roadmap, (roadmap) => roadmap.author),
    __metadata("design:type", Array)
], Users.prototype, "roadmaps", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ default: new Date() }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Users.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Users.prototype, "updatedAt", void 0);
exports.Users = Users = __decorate([
    (0, typeorm_1.Entity)('users')
], Users);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(23), exports);
__exportStar(__webpack_require__(24), exports);
__exportStar(__webpack_require__(26), exports);
__exportStar(__webpack_require__(27), exports);
__exportStar(__webpack_require__(29), exports);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CurrentUser = void 0;
const common_1 = __webpack_require__(2);
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IsPublic = void 0;
const core_1 = __webpack_require__(25);
exports.IsPublic = core_1.Reflector.createDecorator();


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MINIO_TOKEN = void 0;
exports.InjectMinio = InjectMinio;
const common_1 = __webpack_require__(2);
exports.MINIO_TOKEN = 'MINIO_INJECT_TOKEN';
function InjectMinio() {
    return (0, common_1.Inject)(exports.MINIO_TOKEN);
}


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const common_1 = __webpack_require__(2);
const jwt_1 = __webpack_require__(28);
const config_1 = __webpack_require__(8);
const core_1 = __webpack_require__(25);
const is_public_decorator_1 = __webpack_require__(24);
let AuthGuard = class AuthGuard {
    jwtService;
    config;
    reflector;
    constructor(jwtService, config, reflector) {
        this.jwtService = jwtService;
        this.config = config;
        this.reflector = reflector;
    }
    async canActivate(context) {
        const isPublic = this.reflector.get(is_public_decorator_1.IsPublic, context.getHandler());
        if (isPublic)
            return true;
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException('token required');
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: this.config.get('JWT_SECRET'),
            });
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _c : Object])
], AuthGuard);


/***/ }),
/* 28 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["USER"] = "USER";
    UserRole["ADMIN"] = "ADMIN";
    UserRole["MODERATOR"] = "MODERATOR";
})(UserRole || (exports.UserRole = UserRole = {}));


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersResolver = void 0;
const graphql_1 = __webpack_require__(7);
const users_service_1 = __webpack_require__(19);
const create_user_input_1 = __webpack_require__(31);
const update_user_input_1 = __webpack_require__(32);
const users_graphqlTypes_1 = __webpack_require__(33);
const find_user_input_1 = __webpack_require__(34);
const common_1 = __webpack_require__(2);
let UsersResolver = class UsersResolver {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(createUserInput) {
        return this.usersService.create(createUserInput);
    }
    findAll() {
        return this.usersService.findAll();
    }
    async findUser(userData, ctx) {
        const result = await this.usersService.findUser(userData);
        ctx.res.cookie('access_token', result.access_token, {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
            path: '/',
            maxAge: 15 * 60 * 1000,
        });
        return result;
    }
    async me(ctx) {
        const token = ctx.req.cookies['access_token'];
        if (!token)
            throw new common_1.UnauthorizedException();
        try {
            const payload = await this.usersService.getUserFromToken(token);
            return {
                sub: payload.sub,
                username: payload.username,
                role: payload.role,
                email: payload.email,
                iat: payload.iat,
                exp: payload.exp,
            };
        }
        catch (err) {
            return err;
        }
    }
    logout(ctx) {
        ctx.res.clearCookie('access_token', {
            httpOnly: true,
            sameSite: 'lax',
            secure: false,
        });
        return true;
    }
    updateUser(updateUserInput) {
        return this.usersService.update(updateUserInput.id, updateUserInput);
    }
    removeUser(id) {
        return this.usersService.remove(id);
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => users_graphqlTypes_1.UsersType, { name: 'registerUser' }),
    __param(0, (0, graphql_1.Args)('createUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_input_1.CreateUserInput !== "undefined" && create_user_input_1.CreateUserInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Query)(() => [users_graphqlTypes_1.UsersType], { name: 'users' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Mutation)(() => users_graphqlTypes_1.AuthResponse, { name: 'user_signin' }),
    __param(0, (0, graphql_1.Args)('userData')),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof find_user_input_1.FindUserInput !== "undefined" && find_user_input_1.FindUserInput) === "function" ? _c : Object, Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findUser", null);
__decorate([
    (0, graphql_1.Query)(() => users_graphqlTypes_1.PayloadType, { name: 'me' }),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "me", null);
__decorate([
    (0, graphql_1.Mutation)(() => Boolean),
    __param(0, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "logout", null);
__decorate([
    (0, graphql_1.Mutation)(() => users_graphqlTypes_1.UsersType),
    __param(0, (0, graphql_1.Args)('updateUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof update_user_input_1.UpdateUserInput !== "undefined" && update_user_input_1.UpdateUserInput) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => users_graphqlTypes_1.UsersType),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "removeUser", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => users_graphqlTypes_1.UsersType),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersResolver);


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserInput = void 0;
const graphql_1 = __webpack_require__(7);
const common_1 = __webpack_require__(22);
let CreateUserInput = class CreateUserInput {
    username;
    email;
    password;
    isBlocked;
    role;
};
exports.CreateUserInput = CreateUserInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], CreateUserInput.prototype, "isBlocked", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.UserRole, { nullable: true }),
    __metadata("design:type", typeof (_a = typeof common_1.UserRole !== "undefined" && common_1.UserRole) === "function" ? _a : Object)
], CreateUserInput.prototype, "role", void 0);
exports.CreateUserInput = CreateUserInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUserInput);


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserInput = void 0;
const create_user_input_1 = __webpack_require__(31);
const graphql_1 = __webpack_require__(7);
let UpdateUserInput = class UpdateUserInput extends (0, graphql_1.PartialType)(create_user_input_1.CreateUserInput) {
    id;
};
exports.UpdateUserInput = UpdateUserInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UpdateUserInput.prototype, "id", void 0);
exports.UpdateUserInput = UpdateUserInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateUserInput);


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PayloadType = exports.AuthResponse = exports.UsersType = void 0;
const graphql_1 = __webpack_require__(7);
const common_1 = __webpack_require__(22);
(0, graphql_1.registerEnumType)(common_1.UserRole, {
    name: 'UserRole',
    description: 'User role enum',
});
let UsersType = class UsersType {
    id;
    username;
    email;
    password;
    isBlocked;
    role;
    createdAt;
    updatedAt;
};
exports.UsersType = UsersType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UsersType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UsersType.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UsersType.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UsersType.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], UsersType.prototype, "isBlocked", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.UserRole),
    __metadata("design:type", typeof (_a = typeof common_1.UserRole !== "undefined" && common_1.UserRole) === "function" ? _a : Object)
], UsersType.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UsersType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UsersType.prototype, "updatedAt", void 0);
exports.UsersType = UsersType = __decorate([
    (0, graphql_1.ObjectType)()
], UsersType);
let AuthResponse = class AuthResponse {
    access_token;
    user;
};
exports.AuthResponse = AuthResponse;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], AuthResponse.prototype, "access_token", void 0);
__decorate([
    (0, graphql_1.Field)(() => UsersType, { nullable: true }),
    __metadata("design:type", UsersType)
], AuthResponse.prototype, "user", void 0);
exports.AuthResponse = AuthResponse = __decorate([
    (0, graphql_1.ObjectType)()
], AuthResponse);
let PayloadType = class PayloadType {
    sub;
    username;
    role;
    email;
    iat;
    exp;
};
exports.PayloadType = PayloadType;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PayloadType.prototype, "sub", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PayloadType.prototype, "username", void 0);
__decorate([
    (0, graphql_1.Field)(() => common_1.UserRole),
    __metadata("design:type", typeof (_d = typeof common_1.UserRole !== "undefined" && common_1.UserRole) === "function" ? _d : Object)
], PayloadType.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], PayloadType.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], PayloadType.prototype, "iat", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], PayloadType.prototype, "exp", void 0);
exports.PayloadType = PayloadType = __decorate([
    (0, graphql_1.ObjectType)()
], PayloadType);


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FindUserInput = void 0;
const graphql_1 = __webpack_require__(7);
let FindUserInput = class FindUserInput {
    email;
    password;
};
exports.FindUserInput = FindUserInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FindUserInput.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FindUserInput.prototype, "password", void 0);
exports.FindUserInput = FindUserInput = __decorate([
    (0, graphql_1.InputType)()
], FindUserInput);


/***/ }),
/* 35 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersAdminResolver = void 0;
const users_graphqlTypes_1 = __webpack_require__(33);
const users_service_1 = __webpack_require__(19);
const graphql_1 = __webpack_require__(7);
let UsersAdminResolver = class UsersAdminResolver {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
};
exports.UsersAdminResolver = UsersAdminResolver;
exports.UsersAdminResolver = UsersAdminResolver = __decorate([
    (0, graphql_1.Resolver)(() => users_graphqlTypes_1.UsersType),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersAdminResolver);


/***/ }),
/* 36 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Roadmap = void 0;
const typeorm_1 = __webpack_require__(16);
const users_managment_1 = __webpack_require__(17);
const tutorial_entity_1 = __webpack_require__(15);
let Roadmap = class Roadmap {
    id;
    title;
    description;
    author;
    authorId;
    tutorials;
    createdAt;
    updatedAt;
};
exports.Roadmap = Roadmap;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Roadmap.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Roadmap.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Roadmap.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_managment_1.Users, (user) => user.roadmaps, { onDelete: 'CASCADE' }),
    __metadata("design:type", typeof (_a = typeof users_managment_1.Users !== "undefined" && users_managment_1.Users) === "function" ? _a : Object)
], Roadmap.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'uuid' }),
    __metadata("design:type", String)
], Roadmap.prototype, "authorId", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tutorial_entity_1.Tutorial, (tutorial) => tutorial.roadmaps, {
        cascade: true,
    }),
    (0, typeorm_1.JoinTable)({
        name: 'roadmap_tutorials',
        joinColumn: { name: 'roadmapId', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'tutorialId', referencedColumnName: 'id' },
    }),
    __metadata("design:type", Array)
], Roadmap.prototype, "tutorials", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Roadmap.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Roadmap.prototype, "updatedAt", void 0);
exports.Roadmap = Roadmap = __decorate([
    (0, typeorm_1.Entity)('roadmaps')
], Roadmap);


/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TutorialsAdminResolver = void 0;
const graphql_1 = __webpack_require__(7);
const tutorials_service_1 = __webpack_require__(12);
const create_tutorial_input_1 = __webpack_require__(38);
const update_tutorial_input_1 = __webpack_require__(39);
const tutorial_graphqlTypes_1 = __webpack_require__(40);
let TutorialsAdminResolver = class TutorialsAdminResolver {
    tutorialsService;
    constructor(tutorialsService) {
        this.tutorialsService = tutorialsService;
    }
    createTutorial(input, ctx) {
        return this.tutorialsService.create(input);
    }
    _adminQueryRoot() {
        return true;
    }
    updateTutorial(updateTutorialInput) {
        return this.tutorialsService.update(updateTutorialInput.id, updateTutorialInput);
    }
    removeTutorial(id) {
        return this.tutorialsService.remove(id);
    }
};
exports.TutorialsAdminResolver = TutorialsAdminResolver;
__decorate([
    (0, graphql_1.Mutation)(() => tutorial_graphqlTypes_1.TutorialType),
    __param(0, (0, graphql_1.Args)('input', { type: () => create_tutorial_input_1.CreateTutorialInput })),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_tutorial_input_1.CreateTutorialInput !== "undefined" && create_tutorial_input_1.CreateTutorialInput) === "function" ? _b : Object, Object]),
    __metadata("design:returntype", void 0)
], TutorialsAdminResolver.prototype, "createTutorial", null);
__decorate([
    (0, graphql_1.Query)(() => Boolean, {
        description: 'Required by GraphQL spec (do not use)',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TutorialsAdminResolver.prototype, "_adminQueryRoot", null);
__decorate([
    (0, graphql_1.Mutation)(() => tutorial_graphqlTypes_1.TutorialType),
    __param(0, (0, graphql_1.Args)('updateTutorialInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof update_tutorial_input_1.UpdateTutorialInput !== "undefined" && update_tutorial_input_1.UpdateTutorialInput) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], TutorialsAdminResolver.prototype, "updateTutorial", null);
__decorate([
    (0, graphql_1.Mutation)(() => tutorial_graphqlTypes_1.TutorialType),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TutorialsAdminResolver.prototype, "removeTutorial", null);
exports.TutorialsAdminResolver = TutorialsAdminResolver = __decorate([
    (0, graphql_1.Resolver)(() => tutorial_graphqlTypes_1.TutorialType),
    __metadata("design:paramtypes", [typeof (_a = typeof tutorials_service_1.TutorialsService !== "undefined" && tutorials_service_1.TutorialsService) === "function" ? _a : Object])
], TutorialsAdminResolver);


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateTutorialInput = exports.CreateUnitInput = void 0;
const graphql_1 = __webpack_require__(7);
let CreateUnitInput = class CreateUnitInput {
    id;
    unitTitle;
    content;
    publish;
    order;
};
exports.CreateUnitInput = CreateUnitInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateUnitInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUnitInput.prototype, "unitTitle", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUnitInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreateUnitInput.prototype, "publish", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], CreateUnitInput.prototype, "order", void 0);
exports.CreateUnitInput = CreateUnitInput = __decorate([
    (0, graphql_1.InputType)()
], CreateUnitInput);
let CreateTutorialInput = class CreateTutorialInput {
    tutorialName;
    authorId;
    category;
    publish;
    description;
    level;
    thumbnail;
    units;
};
exports.CreateTutorialInput = CreateTutorialInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTutorialInput.prototype, "tutorialName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTutorialInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateTutorialInput.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], CreateTutorialInput.prototype, "publish", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateTutorialInput.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateTutorialInput.prototype, "level", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateTutorialInput.prototype, "thumbnail", void 0);
__decorate([
    (0, graphql_1.Field)(() => [CreateUnitInput], { nullable: 'itemsAndList' }),
    __metadata("design:type", Array)
], CreateTutorialInput.prototype, "units", void 0);
exports.CreateTutorialInput = CreateTutorialInput = __decorate([
    (0, graphql_1.InputType)()
], CreateTutorialInput);


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateTutorialInput = void 0;
const create_tutorial_input_1 = __webpack_require__(38);
const graphql_1 = __webpack_require__(7);
let UpdateTutorialInput = class UpdateTutorialInput extends (0, graphql_1.PartialType)(create_tutorial_input_1.CreateTutorialInput) {
    id;
};
exports.UpdateTutorialInput = UpdateTutorialInput;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UpdateTutorialInput.prototype, "id", void 0);
exports.UpdateTutorialInput = UpdateTutorialInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateTutorialInput);


/***/ }),
/* 40 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UnitType = exports.TutorialType = void 0;
const graphql_1 = __webpack_require__(7);
const users_managment_1 = __webpack_require__(17);
let TutorialType = class TutorialType {
    id;
    tutorialName;
    description;
    level;
    thumbnail;
    category;
    author;
    authorId;
    publish;
    units;
    unitsTitlesList;
    createdAt;
    updatedAt;
};
exports.TutorialType = TutorialType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], TutorialType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], TutorialType.prototype, "tutorialName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], TutorialType.prototype, "description", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], TutorialType.prototype, "level", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], TutorialType.prototype, "thumbnail", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], TutorialType.prototype, "category", void 0);
__decorate([
    (0, graphql_1.Field)(() => users_managment_1.UsersType),
    __metadata("design:type", typeof (_a = typeof users_managment_1.UsersType !== "undefined" && users_managment_1.UsersType) === "function" ? _a : Object)
], TutorialType.prototype, "author", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], TutorialType.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], TutorialType.prototype, "publish", void 0);
__decorate([
    (0, graphql_1.Field)(() => [UnitType], { nullable: 'itemsAndList' }),
    __metadata("design:type", Array)
], TutorialType.prototype, "units", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], TutorialType.prototype, "unitsTitlesList", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], TutorialType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], TutorialType.prototype, "updatedAt", void 0);
exports.TutorialType = TutorialType = __decorate([
    (0, graphql_1.ObjectType)()
], TutorialType);
let UnitType = class UnitType {
    id;
    unitTitle;
    content;
    order;
    publish;
    tutorialId;
    createdAt;
    updatedAt;
};
exports.UnitType = UnitType;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UnitType.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UnitType.prototype, "unitTitle", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UnitType.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UnitType.prototype, "order", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], UnitType.prototype, "publish", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UnitType.prototype, "tutorialId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UnitType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], UnitType.prototype, "updatedAt", void 0);
exports.UnitType = UnitType = __decorate([
    (0, graphql_1.ObjectType)('TutorialUnit')
], UnitType);


/***/ }),
/* 41 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TutorialsResolver = void 0;
const graphql_1 = __webpack_require__(7);
const tutorials_service_1 = __webpack_require__(12);
const tutorial_graphqlTypes_1 = __webpack_require__(40);
const filter_tutorial_input_1 = __webpack_require__(42);
let TutorialsResolver = class TutorialsResolver {
    tutorialsService;
    constructor(tutorialsService) {
        this.tutorialsService = tutorialsService;
    }
    findAll(filters) {
        return this.tutorialsService.findAll(filters);
    }
    findOne(id, ctx) {
        return this.tutorialsService.findOne(id);
    }
};
exports.TutorialsResolver = TutorialsResolver;
__decorate([
    (0, graphql_1.Query)(() => [tutorial_graphqlTypes_1.TutorialType], { name: 'tutorialList' }),
    __param(0, (0, graphql_1.Args)('filters', { type: () => filter_tutorial_input_1.FilterTutorialInput, nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof filter_tutorial_input_1.FilterTutorialInput !== "undefined" && filter_tutorial_input_1.FilterTutorialInput) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], TutorialsResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => tutorial_graphqlTypes_1.TutorialType, { name: 'tutorialById' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.ID })),
    __param(1, (0, graphql_1.Context)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], TutorialsResolver.prototype, "findOne", null);
exports.TutorialsResolver = TutorialsResolver = __decorate([
    (0, graphql_1.Resolver)(() => tutorial_graphqlTypes_1.TutorialType),
    __metadata("design:paramtypes", [typeof (_a = typeof tutorials_service_1.TutorialsService !== "undefined" && tutorials_service_1.TutorialsService) === "function" ? _a : Object])
], TutorialsResolver);


/***/ }),
/* 42 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FilterTutorialInput = void 0;
const graphql_1 = __webpack_require__(7);
let FilterTutorialInput = class FilterTutorialInput {
    id;
    tutorialName;
    levels;
    categories;
    authorId;
    publish;
    createdAfter;
    createdBefore;
};
exports.FilterTutorialInput = FilterTutorialInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], FilterTutorialInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], FilterTutorialInput.prototype, "tutorialName", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], FilterTutorialInput.prototype, "levels", void 0);
__decorate([
    (0, graphql_1.Field)(() => [String], { nullable: true }),
    __metadata("design:type", Array)
], FilterTutorialInput.prototype, "categories", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], FilterTutorialInput.prototype, "authorId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Boolean)
], FilterTutorialInput.prototype, "publish", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], FilterTutorialInput.prototype, "createdAfter", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], FilterTutorialInput.prototype, "createdBefore", void 0);
exports.FilterTutorialInput = FilterTutorialInput = __decorate([
    (0, graphql_1.InputType)()
], FilterTutorialInput);


/***/ }),
/* 43 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(44), exports);
__exportStar(__webpack_require__(45), exports);


/***/ }),
/* 44 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var FileStorageModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileStorageModule = void 0;
const common_1 = __webpack_require__(2);
const file_storage_service_1 = __webpack_require__(45);
const file_storage_admin_controller_1 = __webpack_require__(48);
const config_1 = __webpack_require__(8);
const common_2 = __webpack_require__(22);
const Minio = __importStar(__webpack_require__(46));
const file_storage_public_controller_1 = __webpack_require__(50);
let FileStorageModule = FileStorageModule_1 = class FileStorageModule {
    static register(mode) {
        const controllers = mode === 'public'
            ? [file_storage_public_controller_1.FileStoragePublicController]
            : [file_storage_admin_controller_1.FileStorageAdminController];
        return {
            module: FileStorageModule_1,
            controllers: controllers,
        };
    }
};
exports.FileStorageModule = FileStorageModule;
exports.FileStorageModule = FileStorageModule = FileStorageModule_1 = __decorate([
    (0, common_1.Module)({
        exports: [file_storage_service_1.FileStorageService, common_2.MINIO_TOKEN],
        imports: [],
        providers: [
            file_storage_service_1.FileStorageService,
            {
                inject: [config_1.ConfigService],
                provide: common_2.MINIO_TOKEN,
                useFactory: (configService) => {
                    return new Minio.Client({
                        endPoint: configService.getOrThrow('MINIO_ENDPOINT'),
                        port: configService.getOrThrow('MINIO_PORT'),
                        accessKey: configService.getOrThrow('MINIO_ACCESS_KEY'),
                        secretKey: configService.getOrThrow('MINIO_SECRET_KEY'),
                        useSSL: false,
                    });
                },
            },
        ],
    })
], FileStorageModule);


/***/ }),
/* 45 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileStorageService = void 0;
const common_1 = __webpack_require__(2);
const common_2 = __webpack_require__(22);
const Minio = __importStar(__webpack_require__(46));
const slugify_1 = __importDefault(__webpack_require__(47));
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
        // removed by dead control flow

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
    __metadata("design:paramtypes", [typeof (_a = typeof Minio !== "undefined" && Minio.Client) === "function" ? _a : Object])
], FileStorageService);


/***/ }),
/* 46 */
/***/ ((module) => {

module.exports = require("minio");

/***/ }),
/* 47 */
/***/ ((module) => {

module.exports = require("slugify");

/***/ }),
/* 48 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileStorageAdminController = void 0;
const common_1 = __webpack_require__(2);
const platform_express_1 = __webpack_require__(49);
const file_storage_service_1 = __webpack_require__(45);
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
    __metadata("design:paramtypes", [typeof (_a = typeof file_storage_service_1.FileStorageService !== "undefined" && file_storage_service_1.FileStorageService) === "function" ? _a : Object])
], FileStorageAdminController);


/***/ }),
/* 49 */
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),
/* 50 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileStoragePublicController = void 0;
const common_1 = __webpack_require__(2);
const file_storage_service_1 = __webpack_require__(45);
let FileStoragePublicController = class FileStoragePublicController {
    fileStorageService;
    constructor(fileStorageService) {
        this.fileStorageService = fileStorageService;
    }
    listFileInBucjet(bucketName) {
        return this.fileStorageService.listObjectsInBucket(bucketName);
    }
    getFile(filename, bucketName) {
        return this.fileStorageService.getFile(filename, bucketName);
    }
};
exports.FileStoragePublicController = FileStoragePublicController;
__decorate([
    (0, common_1.Get)('listFileInBucket/:bucketName'),
    __param(0, (0, common_1.Param)('bucketName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FileStoragePublicController.prototype, "listFileInBucjet", null);
__decorate([
    (0, common_1.Get)('fileUrl/:bucketName/:filename'),
    __param(0, (0, common_1.Param)('filename')),
    __param(1, (0, common_1.Param)('bucketName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], FileStoragePublicController.prototype, "getFile", null);
exports.FileStoragePublicController = FileStoragePublicController = __decorate([
    (0, common_1.Controller)('files'),
    __metadata("design:paramtypes", [typeof (_a = typeof file_storage_service_1.FileStorageService !== "undefined" && file_storage_service_1.FileStorageService) === "function" ? _a : Object])
], FileStoragePublicController);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = handler;
const admin_api_module_1 = __webpack_require__(1);
const core_1 = __webpack_require__(25);
const common_1 = __webpack_require__(2);
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

})();

/******/ })()
;