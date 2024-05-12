import { defer } from 'react-router-dom';
import { getPromotion, getPromotions } from '../requestActions/mainPage';
import { getProductsByPromotion, getProductsNoPromotion, getProductsBest } from '../requestActions/commodity';

export const promotionsPage = async () => {
  return defer({
    promotions: getPromotions(),
  });
};

export const promotionPage = async ({ params }) => {
  const index = params.id;

  return defer({
    promotion: getPromotion(index),
    promotionProduct: getProductsByPromotion(index),
    anotherProduct: getProductsBest(),
    noPromotionProduct: getProductsNoPromotion(index),
  });
};
