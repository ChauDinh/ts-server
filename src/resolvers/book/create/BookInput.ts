import { Length } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class BookInput {
  @Field()
  @Length(1, 255)
  title: string;
    
  @Field() 
  @Length(1, 255)
  author: string;
}