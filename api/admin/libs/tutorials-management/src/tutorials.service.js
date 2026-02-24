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
exports.TutorialsService = void 0;
const common_1 = require("@nestjs/common");
const console_1 = require("console");
const typeorm_1 = require("@nestjs/typeorm");
const tutorial_entity_1 = require("./entities/tutorial.entity");
const typeorm_2 = require("typeorm");
let TutorialsService = class TutorialsService {
    tutorialRepo;
    unitRepo;
    constructor(tutorialRepo, unitRepo) {
        this.tutorialRepo = tutorialRepo;
        this.unitRepo = unitRepo;
    }
    async create(createTutorialInput) {
        const newTutorial = this.tutorialRepo.create({
            ...createTutorialInput,
            createdAt: new Date(),
            publish: true,
            units: createTutorialInput.units?.map((unit) => ({
                ...unit,
                createdAt: new Date(),
                publish: false,
            })),
        });
        (0, console_1.log)(newTutorial);
        return await this.tutorialRepo.save(newTutorial);
    }
    async findAll(filters) {
        const qb = this.tutorialRepo
            .createQueryBuilder('tutorial')
            .leftJoinAndSelect('tutorial.units', 'unit')
            .leftJoinAndSelect('tutorial.author', 'author');
        if (filters?.publish) {
            qb.andWhere('tutorial.publish = :publish', {
                publish: filters.publish,
            });
        }
        if (filters?.authorId) {
            qb.andWhere('tutorial.authorId = :authorId', {
                authorId: filters.authorId,
            });
        }
        if (filters?.levels?.length) {
            qb.andWhere('tutorial.level IN (:...levels)', { levels: filters.levels });
        }
        if (filters?.tutorialName) {
            qb.andWhere('tutorial.tutorialName ILIKE :tutorialName', {
                tutorialName: `%${filters.tutorialName}%`,
            });
        }
        if (filters?.categories?.length) {
            qb.andWhere('tutorial.category IN (:...categories)', {
                categories: filters.categories,
            });
        }
        if (filters?.createdAfter) {
            qb.andWhere('tutorial.createdAt >= :createdAfter', {
                createdAfter: filters.createdAfter,
            });
        }
        if (filters?.createdBefore) {
            qb.andWhere('tutorial.createdAt <= :createdBefore', {
                createdBefore: filters.createdBefore,
            });
        }
        qb.orderBy('tutorial.createdAt', 'DESC').addOrderBy('unit.order', 'ASC');
        return qb.getMany();
    }
    async findOne(id) {
        const tutorial = await this.tutorialRepo
            .createQueryBuilder('tutorial')
            .where('tutorial.id=:id', { id: id })
            .leftJoinAndSelect('tutorial.units', 'unit')
            .leftJoinAndSelect('tutorial.author', 'author')
            .orderBy('tutorial.createdAt', 'DESC')
            .addOrderBy('unit.order', 'ASC')
            .getOne();
        if (!tutorial) {
            throw new Error(`Tutorial with id ${id} not found`);
        }
        const unitsTitlesList = tutorial.units
            ?.map((unit) => unit.unitTitle)
            .filter((title) => !!title) || [];
        return { ...tutorial, unitsTitlesList };
    }
    async update(id, updateTutorialInput) {
        const tutorial = await this.tutorialRepo.preload({
            ...updateTutorialInput,
        });
        console.log(tutorial);
        if (!tutorial) {
            throw new Error(`Tutorial with id ${id} not found`);
        }
        return this.tutorialRepo.save(tutorial);
    }
    remove(id) {
        return `This action removes a #${id} tutorial`;
    }
};
exports.TutorialsService = TutorialsService;
exports.TutorialsService = TutorialsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tutorial_entity_1.Tutorial)),
    __param(1, (0, typeorm_1.InjectRepository)(tutorial_entity_1.Unit)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TutorialsService);
//# sourceMappingURL=tutorials.service.js.map