import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from "./resolvers/user/Register";
import { BookResolver } from "./resolvers/book/BookResolver";
import DataSourceSingleton from "./app-data-source";


const main = async () => {
  const dataSource = DataSourceSingleton.getInstance();
  dataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!!!");
    })
    .catch(err => console.error(err))

  const schema = await buildSchema({
    resolvers: [RegisterResolver, BookResolver]
  })

  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('The server is running on http://localhost:4000');
  })
}

main()
  .catch(err => console.error(err));