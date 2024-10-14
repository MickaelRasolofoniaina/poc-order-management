import { drizzleDb } from "@/database/db";
import {
  customersTable,
  ordersTable,
  detailOrdersTable,
} from "@/database/schema";
import { eq } from "drizzle-orm";

export const findAllOrders = async () => {
  const data = await drizzleDb
    .select()
    .from(ordersTable)
    .innerJoin(
      customersTable,
      eq(ordersTable.customerId, customersTable.customerId),
    )
    .innerJoin(
      detailOrdersTable,
      eq(ordersTable.orderId, detailOrdersTable.orderId),
    );
  return data;
};
