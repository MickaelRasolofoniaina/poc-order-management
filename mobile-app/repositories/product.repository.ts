import { drizzleDb } from "@/database/db";
import { productsTable } from "@/database/schema";

export const findAllProducts = async () => {
  const data = await drizzleDb.select().from(productsTable);
  return data;
};
