"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminApiModule = void 0;
const common_1 = require("@nestjs/common");
const admin_api_controller_1 = require("./admin-api.controller");
const admin_api_service_1 = require("./admin-api.service");
const apollo_1 = require("@nestjs/apollo");
const graphql_1 = require("@nestjs/graphql");
const terminus_1 = require("@nestjs/terminus");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
const tutorials_management_1 = require("../../../libs/tutorials-management/src");
const typeorm_1 = require("@nestjs/typeorm");
const users_managment_1 = require("../../../libs/users-managment/src");
const src_1 = require("../../../libs/file-storage/src");
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
//# sourceMappingURL=admin-api.module.js.map