import { drizzleDb } from "@/database/db";
import { customersTable } from "@/database/schema";
import { eq } from "drizzle-orm";

export const findAllCustomers = async () => {
  const data = await drizzleDb.select().from(customersTable);
  return data;
};

export const findCustomerById = async (customerId: string) => {
  const data = await drizzleDb
    .select()
    .from(customersTable)
    .where(eq(customersTable.customerId, customerId));

  if (data.length > 0) {
    return data[0];
  }
};
