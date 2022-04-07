import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Book } from "../../entities/Book";
import { BookInput } from "./create/BookInput";

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  async getAll() {
    return await Book.find();
  }

  @Mutation(() => Book)
  async createBook(
    @Arg("input") {title, author}: BookInput
  ): Promise<Book> {
    const book = await Book.create({
      title,
      author
    }).save();

    return book;
  }
}