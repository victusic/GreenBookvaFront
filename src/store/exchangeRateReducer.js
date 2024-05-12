const defaultState = {
  RUB: 0,
  KZT: 0,
};

const REFRESH_RUB = 'REFRESH_RUB';
const REFRESH_KZT = 'REFRESH_KZT';

export const exchangeRateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REFRESH_RUB:
      return { ...state, RUB: action.payload };
    case REFRESH_KZT:
      return { ...state, KZT: action.payload };
    default:
      return state;
  }
};

export const refreshRubAction = (payload) => ({ type: REFRESH_RUB, payload });
export const refreshKztAction = (payload) => ({ type: REFRESH_KZT, payload });
