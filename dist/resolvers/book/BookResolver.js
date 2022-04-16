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
exports.BookResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Book_1 = require("../../entities/Book");
const BookInput_1 = require("./create/BookInput");
const BookRepository_1 = require("../../repository/BookRepository");
let BookResolver = class BookResolver {
    async getAll() {
        return BookRepository_1.BookRepository.getAllBooks();
    }
    async createBook({ title, author }) {
        const book = await Book_1.Book.create({
            title,
            author
        }).save();
        return book;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [Book_1.Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "getAll", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Book_1.Book),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BookInput_1.BookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
BookResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=BookResolver.js.map