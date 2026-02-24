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
exports.Unit = exports.Tutorial = void 0;
const typeorm_1 = require("typeorm");
const users_managment_1 = require("../../../users-managment/src");
const roadmap_entity_1 = require("./roadmap.entity");
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
    __metadata("design:type", users_managment_1.Users)
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
    __metadata("design:type", Date)
], Tutorial.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
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
    __metadata("design:type", Date)
], Unit.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Unit.prototype, "updatedAt", void 0);
exports.Unit = Unit = __decorate([
    (0, typeorm_1.Entity)('units')
], Unit);
//# sourceMappingURL=tutorial.entity.js.map