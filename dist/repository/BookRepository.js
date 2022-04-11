"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const app_data_source_1 = require("../app-data-source");
const Book_1 = require("../entities/Book");
exports.BookRepository = app_data_source_1.AppDataSource.getRepository(Book_1.Book).extend({
    async getAllBooks() {
        let results = await this.find();
        if (results && results.length) {
            return results;
        }
        return null;
    }
});
//# sourceMappingURL=BookRepository.js.map