export interface locationState {
  location: string;
}

export const REFRESH_LOCATION = 'REFRESH_LOCATION';

export interface RefreshLocationAction {
  type: typeof REFRESH_LOCATION;
  payload: string;
}
