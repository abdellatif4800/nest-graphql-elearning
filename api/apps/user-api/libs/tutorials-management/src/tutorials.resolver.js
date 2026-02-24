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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tutorials_service_1 = require("./tutorials.service");
const tutorial_graphqlTypes_1 = require("./entities/tutorial.graphqlTypes");
const filter_tutorial_input_1 = require("./dto/filter-tutorial.input");
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
    __metadata("design:paramtypes", [filter_tutorial_input_1.FilterTutorialInput]),
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
    __metadata("design:paramtypes", [tutorials_service_1.TutorialsService])
], TutorialsResolver);
//# sourceMappingURL=tutorials.resolver.js.map