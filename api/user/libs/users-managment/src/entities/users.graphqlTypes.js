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
exports.PayloadType = exports.AuthResponse = exports.UsersType = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("../../../common/src");
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
    __metadata("design:type", String)
], UsersType.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UsersType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
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
    __metadata("design:type", String)
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
//# sourceMappingURL=users.graphqlTypes.js.map