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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterResolver = void 0;
const type_graphql_1 = require("type-graphql");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const User_1 = require("../../entities/User");
const RegisterInput_1 = require("./register/RegisterInput");
let RegisterResolver = class RegisterResolver {
    async greeting() {
        return 'Hello, World!';
    }
    async register({ email, password, firstName, lastName }) {
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        const user = await User_1.User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword
        }).save();
        return user;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String, { name: "hello" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "greeting", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegisterInput_1.RegisterInput]),
    __metadata("design:returntype", Promise)
], RegisterResolver.prototype, "register", null);
RegisterResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], RegisterResolver);
exports.RegisterResolver = RegisterResolver;
//# sourceMappingURL=Register.js.map