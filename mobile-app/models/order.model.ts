import { Customer } from "./customer.model";

export interface Order {
  orderId: number;
  customerId: string;
  orderDate: string;
  shippingDate: string | null;
  shippingName: string | null;
  shippingAddress: string | null;
  shippingCity: string | null;
  shippingRegion: string | null;
  shippingPostalCode: string | null;
  shippingCountry: string | null;
  shippingPhone: string | null;
}

export interface DetailOrder {
  detailOrderId: number;
  orderId: number;
  productId: string;
  unitPrice: number;
  quantity: number;
}

export interface OrderData {
  customer: Customer;
  order: Order;
  detailOrder: DetailOrder[];
}
