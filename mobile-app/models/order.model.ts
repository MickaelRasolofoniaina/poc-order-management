export interface Order {
    orderId: number;
    customerId: string;
    orderDate: Date;
    shippingDate: Date;
    shippingName: string;
    shippingAddress: string;
    shippingCity: string;
    shippingRegion: string;
    shippingPostalCode: string;
    shippingCountry: string;
    shippingPhone: string;
}

export interface DetailOrder {
    detailOrderId: number;
    orderId: number;
    productId: string;
    unitPrice: number;
    quantity: number;
}