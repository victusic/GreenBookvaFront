import { useSelector } from 'react-redux';
import { refreshStocksBase } from '../../store/stocksReducer';
import { RootState } from '../../store';

export const fetchStocks = () => {
  const apiUrl = useSelector((state: RootState) => state.externalLinks.api);
  return function (dispatchStocks) {
    fetch(`${apiUrl}promotions`)
      .then((response) => response.json())
      .then((json) => dispatchStocks(refreshStocksBase(json)));
  };
};
