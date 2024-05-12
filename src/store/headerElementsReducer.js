const defaultState = {
  location: false,
  catalog: false,
  menu: false,
};

const REFRESH_HEADERS__LOCATION = 'REFRESH_HEADERS__LOCATION';
const REFRESH_HEADERS__CATALOG = 'REFRESH_HEADERS__CATALOG';
const REFRESH_HEADERS__MENU = 'REFRESH_HEADERS__MENU';

export const headerElementsReducer = (state = defaultState, action) => {
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

export const refreshHeadersLocationAction = (payload) => ({ type: REFRESH_HEADERS__LOCATION, payload });
export const refreshHeadersCatalogAction = (payload) => ({ type: REFRESH_HEADERS__CATALOG, payload });
export const refreshHeadersMenuAction = (payload) => ({ type: REFRESH_HEADERS__MENU, payload });
