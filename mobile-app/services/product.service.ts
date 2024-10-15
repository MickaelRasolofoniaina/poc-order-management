import { findAllProducts } from "@/repositories/product.repository";

export const getAllProducts = async () => {
  return await findAllProducts();
};
