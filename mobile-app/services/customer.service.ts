import {
  findAllCustomers,
  findCustomerById,
} from "@/repositories/customer.repository";

export const getAllCustomers = async () => {
  return await findAllCustomers();
};

export const getCustomerById = async (customerId: string) => {
  return await findCustomerById(customerId);
};
