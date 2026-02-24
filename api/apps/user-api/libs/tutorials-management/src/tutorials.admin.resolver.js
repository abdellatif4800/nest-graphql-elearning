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
exports.TutorialsAdminResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const tutorials_service_1 = require("./tutorials.service");
const create_tutorial_input_1 = require("./dto/create-tutorial.input");
const update_tutorial_input_1 = require("./dto/update-tutorial.input");
const tutorial_graphqlTypes_1 = require("./entities/tutorial.graphqlTypes");
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
    __metadata("design:paramtypes", [create_tutorial_input_1.CreateTutorialInput, Object]),
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
    __metadata("design:paramtypes", [update_tutorial_input_1.UpdateTutorialInput]),
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
    __metadata("design:paramtypes", [tutorials_service_1.TutorialsService])
], TutorialsAdminResolver);
//# sourceMappingURL=tutorials.admin.resolver.js.map