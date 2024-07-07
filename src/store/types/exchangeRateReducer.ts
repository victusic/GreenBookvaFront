export interface ExchangeRateState {
  RUB: number;
  KZT: number;
}

export const REFRESH_RUB = 'REFRESH_RUB';
export const REFRESH_KZT = 'REFRESH_KZT';

export interface RefreshRubAction {
  type: typeof REFRESH_RUB;
  payload: number;
}

export interface RefreshKztAction {
  type: typeof REFRESH_KZT;
  payload: number;
}

export type ExchangeRateActionTypes = RefreshRubAction | RefreshKztAction;
