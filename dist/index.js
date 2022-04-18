"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const Register_1 = require("./resolvers/user/Register");
const BookResolver_1 = require("./resolvers/book/BookResolver");
const app_data_source_1 = __importDefault(require("./app-data-source"));
const main = async () => {
    const dataSource = app_data_source_1.default.getInstance();
    dataSource.initialize()
        .then(() => {
        console.log("Data Source has been initialized!!!");
    })
        .catch(err => console.error(err));
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [Register_1.RegisterResolver, BookResolver_1.BookResolver]
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({ schema });
    await apolloServer.start();
    const app = (0, express_1.default)();
    apolloServer.applyMiddleware({ app });
    app.listen(4000, () => {
        console.log('The server is running on http://localhost:4000');
    });
};
main()
    .catch(err => console.error(err));
//# sourceMappingURL=index.js.map