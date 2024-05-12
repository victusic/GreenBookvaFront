const defaultState = {
  stocksBase: [],
};

const REFRESH_STOCKS_BASE = 'REFRESH_STOCKS_BASE';

export const stocksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REFRESH_STOCKS_BASE:
      return { ...state, stocksBase: action.payload };
    default:
      return state;
  }
};

export const refreshStocksBase = (payload) => ({ type: REFRESH_STOCKS_BASE, payload });
