export interface Order {
  orderId: number;
  customerId: number;
  orderDate: Date | null;
  shippingDate: Date | null;
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
  productId: number;
  unitPrice: number;
  quantity: number;
}
