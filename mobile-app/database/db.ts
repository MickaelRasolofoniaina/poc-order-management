import * as SQLite from "expo-sqlite";
import { INIT_DATABASE_SQL } from "./sql";

export const getDB = async () => {
  const db = await SQLite.openDatabaseAsync("app.db");
  return db;
};

export const closeDB = async (db: SQLite.SQLiteDatabase) => {
  await db.closeAsync();
};

export const initDb = async () => {
  const db = await getDB();
  await db.execAsync(INIT_DATABASE_SQL);
  await closeDB(db);
};
