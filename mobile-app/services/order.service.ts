import { findAllOrders } from "@/repositories/order.repository";

export const getAllOrders = async () => {
  return findAllOrders();
};
