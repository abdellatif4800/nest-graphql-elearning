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
exports.CreateTutorialInput = exports.CreateUnitInput = void 0;
const graphql_1 = require("@nestjs/graphql");
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
//# sourceMappingURL=create-tutorial.input.js.map