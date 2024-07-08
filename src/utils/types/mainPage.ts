export interface RecommendationBanner {
  image: string;
  productId: number;
}

export interface PromotionSlide {
  id: number;
  banner: string;
}

export interface ShortPromotion {
  id: number;
  name: string;
  duration: number;
  banner: string;
  shortDescription: string;
}

export interface FullPromotion {
  id: number;
  name: string;
  duration: number;
  banner: string;
  fullDescription: string;
}
