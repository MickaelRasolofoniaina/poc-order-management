import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const customersTable = sqliteTable("CUSTOMER", {
  customerId: int().primaryKey({ autoIncrement: true }),
  companyName: text(),
  contactName: text(),
  address: text(),
  city: text(),
  region: text(),
  postalCode: text(),
  country: text(),
  phone: text(),
});

export const productsTable = sqliteTable("PRODUCT", {
  productId: int().primaryKey({ autoIncrement: true }),
  productName: text().notNull(),
  description: text(),
  unitPrice: int().notNull(),
});

export const ordersTable = sqliteTable("ORDER", {
  orderId: int().primaryKey({ autoIncrement: true }),
  customerId: text()
    .notNull()
    .references(() => customersTable.customerId),
  orderDate: text(),
  shippingDate: text(),
  shippingName: text(),
  shippingAddress: text(),
  shippingCity: text(),
  shippingRegion: text(),
  shippingPostalCode: text(),
  shippingCountry: text(),
  shippingPhone: text(),
});

export const detailOrdersTable = sqliteTable("DETAIL_ORDER", {
  detailOrderId: int().primaryKey({ autoIncrement: true }),
  orderId: int()
    .notNull()
    .references(() => ordersTable.orderId),
  productId: int()
    .notNull()
    .references(() => productsTable.productId),
  unitPrice: int().notNull(),
  quantity: int().notNull(),
});
