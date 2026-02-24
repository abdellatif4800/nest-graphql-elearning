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
exports.UnitType = exports.TutorialType = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_managment_1 = require("../../../users-managment/src");
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
    __metadata("design:type", users_managment_1.UsersType)
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
    __metadata("design:type", Date)
], TutorialType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
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
    __metadata("design:type", Date)
], UnitType.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], UnitType.prototype, "updatedAt", void 0);
exports.UnitType = UnitType = __decorate([
    (0, graphql_1.ObjectType)('TutorialUnit')
], UnitType);
//# sourceMappingURL=tutorial.graphqlTypes.js.map