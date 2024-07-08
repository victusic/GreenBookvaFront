import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const useCurrent = (price: number) => {
  const current = useSelector((state: RootState) => state.current.currentType);
  const exchangeKZT = useSelector((state: RootState) => state.exchange.KZT);
  const exchangeRUB = useSelector((state: RootState) => state.exchange.RUB);

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
