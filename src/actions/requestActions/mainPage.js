export const getRecommendationBanner = async () => {
  const banner = await fetch('https://db.greenbookva.shop/recommendation_banner');

  if (!banner.ok) {
    throw new Response('', { status: banner.status, statusText: banner.statusText });
  }

  return banner.json();
};

export const getPromotionsSlider = async () => {
  const promotions = await fetch('https://db.greenbookva.shop/promotions_slider');

  if (!promotions.ok) {
    throw new Response('', { status: promotions.status, statusText: promotions.statusText });
  }

  return promotions.json();
};

export const getPromotions = async () => {
  const promotion = await fetch('https://db.greenbookva.shop/promotions');

  if (!promotion.ok) {
    throw new Response('', { status: promotion.status, statusText: promotion.statusText });
  }

  return promotion.json();
};

export const getPromotion = async (index) => {
  const promotion = await fetch(`https://db.greenbookva.shop/promotions/${index}`);

  if (!promotion.ok) {
    throw new Response('', { status: promotion.status, statusText: promotion.statusText });
  }

  return promotion.json();
};
