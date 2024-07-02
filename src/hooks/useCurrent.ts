import { useSelector } from 'react-redux';

export const useCurrent = (price: number) => {
  const current = useSelector((state) => state.current.currentType);
  const exchangeKZT = useSelector((state) => state.exchange.KZT);
  const exchangeRUB = useSelector((state) => state.exchange.RUB);

  let localPrice = Number(price);

  let finalPrice: string;

  switch (current) {
    case 0:
      localPrice *= exchangeKZT;
      localPrice = Math.round(localPrice / 10) * 10;
      finalPrice = localPrice + ' ₸';
      break;
    case 1:
      if (!Number.isInteger(localPrice)) {
        finalPrice = localPrice.toFixed(1);
      }
      finalPrice = localPrice + ' $';
      break;
    case 2:
      localPrice *= exchangeRUB;
      localPrice = Math.round(localPrice / 10) * 10;
      finalPrice = localPrice + ' ₽';
      break;
    default:
      finalPrice = String(localPrice);
      break;
  }

  return finalPrice;
};
