import * as SQLite from "expo-sqlite";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { INIT_DATABASE_SQL } from "./sql";

// To remove
SQLite.deleteDatabaseSync("app.db");

export const expoDb = SQLite.openDatabaseSync("app.db");

export const drizzleDb = drizzle(expoDb);

export const initDb = async () => {
  await expoDb.execAsync(INIT_DATABASE_SQL);
};
