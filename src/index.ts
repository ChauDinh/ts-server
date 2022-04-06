import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema, Query, Resolver } from "type-graphql";

@Resolver()
class RecipeResolver {
  @Query(() => String)
  async greeting() {
    return 'Hello, World!'
  }
}

const main = async () => {

  const schema = await buildSchema({
    resolvers: [RecipeResolver]
  })

  const apolloServer = new ApolloServer({schema});
  await apolloServer.start();

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('The server is running on http://localhost:4000');
  })
}

main()
  .catch(err => console.error(err));