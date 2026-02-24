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
exports.Roadmap = void 0;
const typeorm_1 = require("typeorm");
const users_managment_1 = require("../../../users-managment/src");
const tutorial_entity_1 = require("./tutorial.entity");
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
    __metadata("design:type", users_managment_1.Users)
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
    __metadata("design:type", Date)
], Roadmap.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Roadmap.prototype, "updatedAt", void 0);
exports.Roadmap = Roadmap = __decorate([
    (0, typeorm_1.Entity)('roadmaps')
], Roadmap);
//# sourceMappingURL=roadmap.entity.js.map