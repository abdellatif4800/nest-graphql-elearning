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
exports.FilterTutorialInput = void 0;
const graphql_1 = require("@nestjs/graphql");
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
    __metadata("design:type", Date)
], FilterTutorialInput.prototype, "createdAfter", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Date)
], FilterTutorialInput.prototype, "createdBefore", void 0);
exports.FilterTutorialInput = FilterTutorialInput = __decorate([
    (0, graphql_1.InputType)()
], FilterTutorialInput);
//# sourceMappingURL=filter-tutorial.input.js.map