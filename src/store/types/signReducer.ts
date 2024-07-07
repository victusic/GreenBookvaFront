export interface SignState {
  mail: string;
  token: string;
  signState: string;
  profile: string;
}

export const REFRESH_MAIL = 'REFRESH_MAIL';
export const REFRESH_TOKEN = 'REFRESH_TOKEN';
export const REFRESH_SIGN_STATE = 'REFRESH_SIGN_STATE';
export const REFRESH_PROFILE = 'REFRESH_PROFILE';

export interface RefreshMailAction {
  type: typeof REFRESH_MAIL;
  payload: string;
}

export interface RefreshTokenAction {
  type: typeof REFRESH_TOKEN;
  payload: string;
}

export interface RefreshSignStateAction {
  type: typeof REFRESH_SIGN_STATE;
  payload: string;
}

export interface RefreshProfileAction {
  type: typeof REFRESH_PROFILE;
  payload: string;
}

export type SignActionTypes =
  | RefreshMailAction
  | RefreshTokenAction
  | RefreshSignStateAction
  | RefreshProfileAction;
