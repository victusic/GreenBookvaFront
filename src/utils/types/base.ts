export interface Product {
  id: number;
  name: string;
  typeId: number;
  authorId?: number;
  authorName?: string;
  authorSurname?: string;
  publisherId?: number;
  publisher?: string;
  manufacturerId?: number;
  manufacturer?: string;
  bindingId?: number;
  binding?: string;
  numberOfPages?: number;
  yearOfPublication?: number;
  circulation?: number;
  size: string;
  description: string;
  weight: number;
  ageRestrictionsId?: number;
  price: string;
  discount?: number;
  promotionId?: number;
  badgeSalesLeader: boolean;
  badgeDiscount: boolean;
  badgeNovelty: boolean;
  categoryId: number;
  subcategoryId: number;
  image: string;
  count: number;
  review?: string;
}

export interface Review {
  id: number;
  accountId: number;
  header: string;
  reviewText: string;
  evaluation: number;
  userName: string;
}
