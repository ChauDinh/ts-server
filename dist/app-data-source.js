"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource(require("../ormconfig.json"));
class DataSourceSingleton {
    constructor() { }
    static getInstance() {
        if (!DataSourceSingleton.instance) {
            DataSourceSingleton.instance = new typeorm_1.DataSource(require("../ormconfig.json"));
        }
        return DataSourceSingleton.instance;
    }
}
exports.default = DataSourceSingleton;
//# sourceMappingURL=app-data-source.js.map