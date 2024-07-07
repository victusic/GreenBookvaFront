export interface CurrentState {
  currentType: number;
}

//0-тенге 1-доллар 2-рубль

export const REFRESH_CURRENT = 'REFRESH_CURRENT';

export interface RefreshCurrentAction {
  type: typeof REFRESH_CURRENT;
  payload: number;
}

export type CurrentActionTypes = RefreshCurrentAction;
