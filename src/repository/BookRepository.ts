import DataSourceSingleton from "../app-data-source";
import { Book } from "../entities/Book"

const dataSource = DataSourceSingleton.getInstance();
export const BookRepository = dataSource.getRepository(Book).extend({
  async getAllBooks(): Promise<Book[] | null> {
    let results = await this.find();

    if (results && results.length) {
      return results;
    }

    return null;
  }
});

