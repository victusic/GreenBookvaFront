import { useSelector } from 'react-redux';

export const useCurrent = (price) => {
  const current = useSelector((state) => state.current.currentType);
  const exchangeKZT = useSelector((state) => state.exchange.KZT);
  const exchangeRUB = useSelector((state) => state.exchange.RUB);

  let localPrice = Number(price);

  switch (current) {
    case 0:
      localPrice *= exchangeKZT;
      localPrice = Math.round(localPrice / 10) * 10;
      localPrice += ' ₸';
      return localPrice;
    case 1:
      if (!Number.isInteger(localPrice)) {
        localPrice = localPrice.toFixed(1);
      }
      localPrice += ' $';
      return localPrice;
    case 2:
      localPrice *= exchangeRUB;
      localPrice = Math.round(localPrice / 10) * 10;
      localPrice += ' ₽';
      return localPrice;
    default:
      return localPrice;
  }
};
