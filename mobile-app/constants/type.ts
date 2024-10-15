import { ExtractTablesWithRelations } from "drizzle-orm";
import { SQLiteTransaction } from "drizzle-orm/sqlite-core";
import { SQLiteRunResult } from "expo-sqlite";

export type Transaction = SQLiteTransaction<
  "sync",
  SQLiteRunResult,
  Record<string, never>,
  ExtractTablesWithRelations<Record<string, never>>
>;
