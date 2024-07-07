import {
  ExchangeRateState,
  ExchangeRateActionTypes,
  REFRESH_RUB,
  REFRESH_KZT,
  RefreshRubAction,
  RefreshKztAction,
} from './types/exchangeRateReducer';

const defaultState: ExchangeRateState = {
  RUB: 0,
  KZT: 0,
};

export const exchangeRateReducer = (
  state = defaultState,
  action: ExchangeRateActionTypes,
): ExchangeRateState => {
  switch (action.type) {
    case REFRESH_RUB:
      return { ...state, RUB: action.payload };
    case REFRESH_KZT:
      return { ...state, KZT: action.payload };
    default:
      return state;
  }
};

export const refreshRubAction = (payload: number): RefreshRubAction => ({
  type: REFRESH_RUB,
  payload,
});

export const refreshKztAction = (payload: number): RefreshKztAction => ({
  type: REFRESH_KZT,
  payload,
});
