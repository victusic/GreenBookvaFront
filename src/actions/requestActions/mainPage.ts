import {
  FullPromotionDTO,
  PromotionSlideDTO,
  RecommendationBannerDTO,
  ShortPromotionDTO,
} from '../types/requestActions';
import { AnyResponse, apiUrl } from '../types/types';

export const getRecommendationBanner = async (): Promise<AnyResponse<RecommendationBannerDTO>> => {
  try {
    const resp = await fetch(`${apiUrl}recommendation_banner`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPromotionsSlider = async (): Promise<AnyResponse<PromotionSlideDTO[]>> => {
  try {
    const resp = await fetch(`${apiUrl}promotions_slider`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPromotions = async (): Promise<AnyResponse<ShortPromotionDTO[]>> => {
  try {
    const resp = await fetch(`${apiUrl}promotions`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPromotion = async (index): Promise<AnyResponse<FullPromotionDTO[]>> => {
  try {
    const resp = await fetch(`${apiUrl}promotions/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
