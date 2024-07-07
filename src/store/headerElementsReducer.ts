import {
  HeaderElementState,
  HeaderElementsActionTypes,
  REFRESH_HEADERS__LOCATION,
  REFRESH_HEADERS__CATALOG,
  REFRESH_HEADERS__MENU,
  RefreshHeadersLocationAction,
  RefreshHeadersCatalogAction,
  RefreshHeadersMenuAction,
} from './types/headerElementsReducer';

const defaultState: HeaderElementState = {
  location: false,
  catalog: false,
  menu: false,
};

export const headerElementsReducer = (
  state = defaultState,
  action: HeaderElementsActionTypes,
): HeaderElementState => {
  switch (action.type) {
    case REFRESH_HEADERS__LOCATION:
      return { ...state, location: action.payload, catalog: false };
    case REFRESH_HEADERS__CATALOG:
      return { ...state, catalog: action.payload, location: false };
    case REFRESH_HEADERS__MENU:
      return { ...state, menu: action.payload };
    default:
      return state;
  }
};

export const refreshHeadersLocationAction = (payload: boolean): RefreshHeadersLocationAction => ({
  type: REFRESH_HEADERS__LOCATION,
  payload,
});
export const refreshHeadersCatalogAction = (payload: boolean): RefreshHeadersCatalogAction => ({
  type: REFRESH_HEADERS__CATALOG,
  payload,
});
export const refreshHeadersMenuAction = (payload: boolean): RefreshHeadersMenuAction => ({
  type: REFRESH_HEADERS__MENU,
  payload,
});
