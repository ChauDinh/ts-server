"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const app_data_source_1 = __importDefault(require("../app-data-source"));
const Book_1 = require("../entities/Book");
const dataSource = app_data_source_1.default.getInstance();
exports.BookRepository = dataSource.getRepository(Book_1.Book).extend({
    async getAllBooks() {
        let results = await this.find();
        if (results && results.length) {
            return results;
        }
        return null;
    }
});
//# sourceMappingURL=BookRepository.js.map