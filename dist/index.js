"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
let RecipeResolver = class RecipeResolver {
    async greeting() {
        return 'Hello, World!';
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RecipeResolver.prototype, "greeting", null);
RecipeResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RecipeResolver);
const main = async () => {
    const AppDataSource = new typeorm_1.DataSource(require("../ormconfig.json"));
    AppDataSource.initialize()
        .then(() => {
        console.log("Data Source has been initialized!!!");
    })
        .catch(err => console.error(err));
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [RecipeResolver]
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