export const getPromocode = async (code) => {
  const promocode = await fetch(`https://db.greenbookva.shop/promo?code=${code}`);

  if (!promocode.ok) {
    throw new Response('', { status: promocode.status, statusText: promocode.statusText });
  }

  return promocode.json();
};

export const getPhrases = async (code) => {
  const phrases = await fetch(`https://db.greenbookva.shop/phrases?code=${code}`);

  if (!phrases.ok) {
    throw new Response('', { status: phrases.status, statusText: phrases.statusText });
  }

  return phrases.json();
};
