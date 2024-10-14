import { findAllCustomers } from "@/repositories/customer.repository";

export const getAllCustomers = async () => {
  return await findAllCustomers();
};
