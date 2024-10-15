import { Transaction } from "@/constants/type";
import { drizzleDb } from "@/database/db";
import {
  customersTable,
  ordersTable,
  detailOrdersTable,
} from "@/database/schema";
import { OrderData } from "@/models/order.model";
import { eq } from "drizzle-orm";

type NewOrder = typeof ordersTable.$inferInsert;
type NewDetailOrder = typeof detailOrdersTable.$inferInsert;

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

  const result = data.reduce<Record<number, OrderData>>((acc, row) => {
    const customer = row.customer;
    const order = row.order;
    const detailOrder = row.detailOrder;
    if (!acc[order.orderId]) {
      acc[order.orderId] = { order, customer, detailOrder: [] };
    }
    if (detailOrder) {
      acc[order.orderId].detailOrder.push(detailOrder);
    }
    return acc;
  }, {});

  return result;
};

export const insertOrder = async (customerId: string, tx: Transaction) => {
  const order: NewOrder = {
    customerId,
    orderDate: new Date().toISOString(),
  };
  const result = await tx.insert(ordersTable).values(order);

  return result;
};

export const insertOrderDetail = async (
  orderId: number,
  detailOrder: {
    productId: string;
    unitPrice: number;
    quantity: number;
  }[],
  tx: Transaction,
) => {
  const data: NewDetailOrder[] = detailOrder.map((d) => ({
    orderId,
    productId: d.productId,
    unitPrice: d.unitPrice,
    quantity: d.quantity,
  }));

  const result = await tx.insert(detailOrdersTable).values(data);

  return result;
};

export const saveOrder = async (
  customerId: string,
  detailOrder: {
    productId: string;
    unitPrice: number;
    quantity: number;
  }[],
) => {
  return await drizzleDb.transaction(async (tx) => {
    const orderResult = await insertOrder(customerId, tx);
    await insertOrderDetail(orderResult.lastInsertRowId, detailOrder, tx);
  });
};
