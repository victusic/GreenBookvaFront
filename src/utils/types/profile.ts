export interface ProfileSystemData {
  productId: number;
  accountId: string;
}

export interface Order {
  orderDate: string;
  productId: number;
  orderCode: number;
  productImage: string;
  price: string;
}

export interface OrderProduct {
  productId: number;
  productImage: string;
  name: string;
  price: string;
  authorName?: string;
  authorSurname?: string;
  manufacturer?: string;
}
