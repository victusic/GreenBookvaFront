//Base

export interface ProductDTO {
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

export interface ReviewDTO {
  id: number;
  accountId: number;
  header: string;
  reviewText: string;
  evaluation: number;
  userName: string;
}

//APM

export interface AuthorDTO {
  id: number;
  name: string;
  surname: string;
  description?: string;
  wikiLink?: string;
  yearOfLife?: string;
  image?: string;
}

export interface AuthorImagesDTO {
  id: number;
  image: string;
}

export interface PublisherDTO {
  id: number;
  name: string;
  description?: string;
  wiki_link?: string;
  image: string;
}

export interface ManufacturerDTO {
  id: number;
  name: string;
  description?: string;
  wiki_link?: string;
  image: string;
}

export interface SlidesDTO {
  id: number;
  slideText: string;
  image: string;
}

//Commodity

export interface ProductImageDTO {
  image: string;
}

export interface ProductImageListDTO {
  image: string;
  sortOrder: number;
}

// Main Page

export interface RecommendationBannerDTO {
  image: string;
  productId: number;
}

export interface PromotionSlideDTO {
  id: number;
  banner: string;
}

export interface ShortPromotionDTO {
  id: number;
  name: string;
  duration: number;
  banner: string;
  shortDescription: string;
}

export interface FullPromotionDTO {
  id: number;
  name: string;
  duration: number;
  banner: string;
  fullDescription: string;
}

// Mongo

export interface PromocodeDTO {
  id: string;
  name: string;
  pattern: number;
  discount?: number;
}

export interface PhraseDTO {
  id: string;
  number: number;
  text: string;
}

//Order

export interface OrderDTO {
  productId: number;
  accountId: number;
  orderDate: string;
  orderCode: number;
}

//Profile

export interface ProfileSystemDataDTO {
  productId: number;
  accountId: string;
}

export interface OrderDTO {
  orderDate: string;
  productId: number;
  orderCode: number;
  productImage: string;
  price: string;
}

export interface OrderProductDTO {
  productId: number;
  productImage: string;
  name: string;
  price: string;
  authorName?: string;
  authorSurname?: string;
  manufacturer?: string;
}

//Types Products

export interface ProductTypeDTO {
  id: number;
  name: string;
}

export interface ProductCategoryDTO {
  id: number;
  name: string;
}

export interface ProductSubcategoryDTO {
  id: number;
  name: string;
}

export interface ProductTypeNameDTO {
  name: string;
}

export interface ProductCategoryNameDTO {
  name: string;
}

export interface ProductSubcategoryNameDTO {
  name: string;
}
