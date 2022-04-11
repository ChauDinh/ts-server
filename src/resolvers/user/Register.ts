import { Arg, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcryptjs";
import { User } from "../../entities/User";
import { RegisterInput } from "./register/RegisterInput";

@Resolver()
export class RegisterResolver {
  @Query(() => String, {name: "hello"})
  async greeting() {
    return 'Hello, World!'
  }

  @Mutation(() => User)
  async register(
    @Arg("input") {email, password, firstName, lastName}: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword
    }).save();

    return user;
  }
}