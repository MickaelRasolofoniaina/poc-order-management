import { drizzleDb } from "@/database/db";
import { customersTable } from "@/database/schema";

export const findAllCustomers = async () => {
  const data = await drizzleDb.select().from(customersTable);
  return data;
};
