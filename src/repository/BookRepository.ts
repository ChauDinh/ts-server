import { AppDataSource } from "../app-data-source";
import { Book } from "../entities/Book"

export const BookRepository = AppDataSource.getRepository(Book).extend({
  async getAllBooks(): Promise<Book[] | null> {
    let results = await this.find();

    if (results && results.length) {
      return results;
    }

    return null;
  }
});

