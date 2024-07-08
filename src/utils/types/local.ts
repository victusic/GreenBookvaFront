export interface CreditCard {
  id: number;
  code: string;
  monthYear: string;
}

export interface CustomOrder {
  orderCode: number;
  date: string;
  products: { image: string; id: number }[];
  price: number;
}
