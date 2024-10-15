import { findAllOrders, saveOrder } from "@/repositories/order.repository";

export const getAllOrders = async () => {
  return await findAllOrders();
};

export const addOrder = async (
  customerId: string,
  articles: { productId: string; unitPrice: number; quantity: number }[],
) => {
  return await saveOrder(customerId, articles);
};
