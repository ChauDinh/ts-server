import { DataSource } from "typeorm"

export const AppDataSource = new DataSource(require("../ormconfig.json"));

class DataSourceSingleton {
  private static instance: DataSource;

  /**
   * The singleton constructor should be private to prevent direct calls `new DataSourceSingleton()`
   */
  private constructor() {}

  public static getInstance(): DataSource {
    if (!DataSourceSingleton.instance) {
      DataSourceSingleton.instance = new DataSource(require("../ormconfig.json"));
    }

    return DataSourceSingleton.instance;
  }
}

export default DataSourceSingleton;