import { useSelector } from 'react-redux';
import {
  FullPromotionDTO,
  PromotionSlideDTO,
  RecommendationBannerDTO,
  ShortPromotionDTO,
} from '../types/requestActions';
import { AnyResponse } from '../types/types';
import { RootState } from '../../store';

export const getRecommendationBanner = async (): Promise<AnyResponse<RecommendationBannerDTO>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}recommendation_banner`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPromotionsSlider = async (): Promise<AnyResponse<PromotionSlideDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}promotions_slider`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPromotions = async (): Promise<AnyResponse<ShortPromotionDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}promotions`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};

export const getPromotion = async (index): Promise<AnyResponse<FullPromotionDTO[]>> => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  try {
    const resp = await fetch(`${apiUrl}promotions/${index}`);
    return await resp.json();
  } catch (e) {
    return { status: false, code: 0 };
  }
};
