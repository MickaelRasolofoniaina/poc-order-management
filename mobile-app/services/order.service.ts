import { findAllOrders, saveOrder } from "@/repositories/order.repository";

export const getAllOrders = async () => {
  return findAllOrders();
};

export const addOrder = async (
  customerId: number,
  articles: { productId: number; unitPrice: number; quantity: number }[],
) => {
  return await saveOrder(customerId, articles);
};
