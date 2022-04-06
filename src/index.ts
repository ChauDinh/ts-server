import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema, Query, Resolver } from "type-graphql";
import { DataSource } from "typeorm"

@Resolver()
class RecipeResolver {
  @Query(() => String)
  async greeting() {
    return 'Hello, World!'
  }
}

const main = async () => {

  const AppDataSource = new DataSource(require("../ormconfig.json"));
  AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!!!");
    })
    .catch(err => console.error(err))

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