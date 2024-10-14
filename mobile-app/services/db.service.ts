import { expoDb, initDb } from "@/database/db";

export const initializeDatabase = async () => {
  const userVersion = await expoDb.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version;",
  );
  if (userVersion?.user_version === 0) {
    await initDb();
    await expoDb.execAsync("PRAGMA user_version = 1;");
  }
};
