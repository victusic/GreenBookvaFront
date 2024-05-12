import { refreshKztAction, refreshRubAction } from '../../store/exchangeRateReducer';
import axios from 'axios';

export const fetchExchange = () => {
  return function (dispatchExchangeReducer) {
    try {
      const response = axios.get(
        'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usdt.json',
      );
      dispatchExchangeReducer(refreshKztAction(Math.ceil(response.data.usdt.kzt)));
      dispatchExchangeReducer(refreshRubAction(Math.ceil(response.data.usdt.rub)));
    } catch (error) {
      console.error(error);
    }
  };
};
