export interface Product {
  id?: number;
  type: string;
  description?: string;
  price: number;
  image: string;
  orderQuantity?: number;
}

export interface Order {
  id?: number;
  client?: User;
  status?: Status;
  dateOfOrderAsTs?: number;
  shippingAddress?: string;
}

export enum Status {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  ON_SHIPPING = 'ON_SHIPPING'
}

export interface User {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
  password?: string;
  newPassword?: string;
  rewritePassword?: string;
  role?: string;
}

export enum Role {
  CLIENT = 'CLIENT',
  ADMIN = 'ADMIN'
}

