export interface HeaderElementState {
  location: boolean;
  catalog: boolean;
  menu: boolean;
}

export const REFRESH_HEADERS__LOCATION = 'REFRESH_HEADERS__LOCATION';
export const REFRESH_HEADERS__CATALOG = 'REFRESH_HEADERS__CATALOG';
export const REFRESH_HEADERS__MENU = 'REFRESH_HEADERS__MENU';

export interface RefreshHeadersLocationAction {
  type: typeof REFRESH_HEADERS__LOCATION;
  payload: boolean;
}

export interface RefreshHeadersCatalogAction {
  type: typeof REFRESH_HEADERS__CATALOG;
  payload: boolean;
}

export interface RefreshHeadersMenuAction {
  type: typeof REFRESH_HEADERS__MENU;
  payload: boolean;
}

export type HeaderElementsActionTypes =
  | RefreshHeadersLocationAction
  | RefreshHeadersCatalogAction
  | RefreshHeadersMenuAction;
