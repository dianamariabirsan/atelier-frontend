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
}

