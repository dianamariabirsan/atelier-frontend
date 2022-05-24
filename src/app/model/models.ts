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
  client?: Client;
  status?: Status;
  dateOfOrderAsTs?: number;
}

export enum Status {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  ON_SHIPPING = 'ON_SHIPPING'
}

export interface Client {
  id?: number;
  name: string;
  email: string;
  phoneNumber: string;
}

