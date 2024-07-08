import { refreshStocksBase } from '../../store/stocksReducer';

export const fetchStocks = () => {
  return function (dispatchStocks) {
    fetch('https://db.greenbookva.shop/promotions')
      .then((response) => response.json())
      .then((json) => dispatchStocks(refreshStocksBase(json)));
  };
};
