import { refreshStocksBase } from '../../store/stocksReducer';
import { apiUrl } from '../types/types';

export const fetchStocks = () => {
  return function (dispatchStocks) {
    fetch(`${apiUrl}promotions`)
      .then((response) => response.json())
      .then((json) => dispatchStocks(refreshStocksBase(json)));
  };
};
