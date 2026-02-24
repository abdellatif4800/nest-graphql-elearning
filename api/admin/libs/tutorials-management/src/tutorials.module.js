"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var TutorialsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialsModule = void 0;
const common_1 = require("@nestjs/common");
const tutorials_service_1 = require("./tutorials.service");
const typeorm_1 = require("@nestjs/typeorm");
const tutorial_entity_1 = require("./entities/tutorial.entity");
const tutorials_admin_resolver_1 = require("./tutorials.admin.resolver");
const tutorials_resolver_1 = require("./tutorials.resolver");
const roadmap_entity_1 = require("./entities/roadmap.entity");
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
//# sourceMappingURL=tutorials.module.js.map