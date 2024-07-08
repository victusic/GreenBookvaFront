import {
  FilterProductState,
  FilterProductActionTypes,
  SET_BADGES,
  SET_AUTHORS,
  SET_PUBLISHERS,
  SET_MANUFACTURERS,
  SET_BINDINGS,
  SET_CHANGE_BADGES,
  DEL_CHANGE_BADGES,
  SET_CHANGE_AUTHORS,
  DEL_CHANGE_AUTHORS,
  SET_CHANGE_PUBLISHERS,
  DEL_CHANGE_PUBLISHERS,
  SET_CHANGE_MANUFACTURERS,
  DEL_CHANGE_MANUFACTURERS,
  SET_CHANGE_BINDINGS,
  DEL_CHANGE_BINDINGS,
  SET_IS_STOCK,
  SET_CHANGE_MIN_PRICE,
  SET_CHANGE_MAX_PRICE,
  SET_RESET_FILTER,
  SET_VISIBLE_NO_FILTER,
  SET_VISIBLE_PAGES,
  FilterType,
  SetBadgesAction,
  SetAuthorsAction,
  SetPublishersAction,
  SetManufacturersAction,
  SetBindingsAction,
  SetChangeBadgesAction,
  DelChangeBadgesAction,
  SetChangeAuthorsAction,
  DelChangeAuthorsAction,
  SetChangePublishersAction,
  DelChangePublishersAction,
  SetChangeManufacturersAction,
  DelChangeManufacturersAction,
  SetChangeBindingsAction,
  DelChangeBindingsAction,
  SetIsStockAction,
  SetChangeMinPriceAction,
  SetChangeMaxPriceAction,
  SetResetFilterAction,
  SetVisibleNoFilterAction,
  SetVisiblePagesAction,
} from './types/filterProductsReducer';

const defaultState: FilterProductState = {
  badges: [],
  authors: [],
  publishers: [],
  manufacturers: [],
  bindings: [],

  changeBadges: [],
  changeAuthors: [],
  changePublishers: [],
  changeManufacturers: [],
  changeBindings: [],

  isStock: false,
  changeMinPrice: 0,
  changeMaxPrice: 120,

  visibleNoFilter: false,
  visiblePages: false,
};

export const filterProductsReducer = (
  state: FilterProductState = defaultState,
  action: FilterProductActionTypes,
): FilterProductState => {
  switch (action.type) {
    case SET_BADGES:
      return { ...state, badges: [...action.payload] };
    case SET_AUTHORS:
      return { ...state, authors: [...action.payload] };
    case SET_PUBLISHERS:
      return { ...state, publishers: [...action.payload] };
    case SET_MANUFACTURERS:
      return { ...state, manufacturers: [...action.payload] };
    case SET_BINDINGS:
      return { ...state, bindings: [...action.payload] };
    case SET_CHANGE_BADGES:
      return { ...state, changeBadges: [...state.changeBadges, action.payload] };
    case DEL_CHANGE_BADGES:
      return { ...state, changeBadges: state.changeBadges.filter((item) => item !== action.payload) };
    case SET_CHANGE_AUTHORS:
      return { ...state, changeAuthors: [...state.changeAuthors, action.payload] };
    case DEL_CHANGE_AUTHORS:
      return { ...state, changeAuthors: state.changeAuthors.filter((item) => item !== action.payload) };
    case SET_CHANGE_PUBLISHERS:
      return { ...state, changePublishers: [...state.changePublishers, action.payload] };
    case DEL_CHANGE_PUBLISHERS:
      return { ...state, changePublishers: state.changePublishers.filter((item) => item !== action.payload) };
    case SET_CHANGE_MANUFACTURERS:
      return { ...state, changeManufacturers: [...state.changeManufacturers, action.payload] };
    case DEL_CHANGE_MANUFACTURERS:
      return {
        ...state,
        changeManufacturers: state.changeManufacturers.filter((item) => item !== action.payload),
      };
    case SET_CHANGE_BINDINGS:
      return { ...state, changeBindings: [...state.changeBindings, action.payload] };
    case DEL_CHANGE_BINDINGS:
      return { ...state, changeBindings: state.changeBindings.filter((item) => item !== action.payload) };
    case SET_IS_STOCK:
      return { ...state, isStock: action.payload };
    case SET_CHANGE_MIN_PRICE:
      return { ...state, changeMinPrice: action.payload };
    case SET_CHANGE_MAX_PRICE:
      return { ...state, changeMaxPrice: action.payload };
    case SET_RESET_FILTER:
      return {
        ...state,
        changeBadges: [],
        changeAuthors: [],
        changePublishers: [],
        changeManufacturers: [],
        changeBindings: [],
        isStock: false,
        changeMinPrice: 0,
        changeMaxPrice: 120,
      };
    case SET_VISIBLE_NO_FILTER:
      return { ...state, visibleNoFilter: action.payload };
    case SET_VISIBLE_PAGES:
      return { ...state, visiblePages: action.payload };
    default:
      return state;
  }
};

export const setBadgesAction = (payload: FilterType[]): SetBadgesAction => ({
  type: SET_BADGES,
  payload,
});

export const setAuthorsAction = (payload: FilterType[]): SetAuthorsAction => ({
  type: SET_AUTHORS,
  payload,
});

export const setPublishersAction = (payload: FilterType[]): SetPublishersAction => ({
  type: SET_PUBLISHERS,
  payload,
});

export const setManufacturersAction = (payload: FilterType[]): SetManufacturersAction => ({
  type: SET_MANUFACTURERS,
  payload,
});

export const setBindingsAction = (payload: FilterType[]): SetBindingsAction => ({
  type: SET_BINDINGS,
  payload,
});

export const setChangeBadgesAction = (payload: number): SetChangeBadgesAction => ({
  type: SET_CHANGE_BADGES,
  payload,
});

export const delChangeBadgesAction = (payload: number): DelChangeBadgesAction => ({
  type: DEL_CHANGE_BADGES,
  payload,
});

export const setChangeAuthorsAction = (payload: number): SetChangeAuthorsAction => ({
  type: SET_CHANGE_AUTHORS,
  payload,
});

export const delChangeAuthorsAction = (payload: number): DelChangeAuthorsAction => ({
  type: DEL_CHANGE_AUTHORS,
  payload,
});

export const setChangePublishersAction = (payload: number): SetChangePublishersAction => ({
  type: SET_CHANGE_PUBLISHERS,
  payload,
});

export const delChangePublishersAction = (payload: number): DelChangePublishersAction => ({
  type: DEL_CHANGE_PUBLISHERS,
  payload,
});

export const setChangeManufacturersAction = (payload: number): SetChangeManufacturersAction => ({
  type: SET_CHANGE_MANUFACTURERS,
  payload,
});

export const delChangeManufacturersAction = (payload: number): DelChangeManufacturersAction => ({
  type: DEL_CHANGE_MANUFACTURERS,
  payload,
});

export const setChangeBindingsAction = (payload: number): SetChangeBindingsAction => ({
  type: SET_CHANGE_BINDINGS,
  payload,
});

export const delChangeBindingsAction = (payload: number): DelChangeBindingsAction => ({
  type: DEL_CHANGE_BINDINGS,
  payload,
});

export const setIsStockAction = (payload: boolean): SetIsStockAction => ({
  type: SET_IS_STOCK,
  payload,
});

export const setChangeMinPriceAction = (payload: number): SetChangeMinPriceAction => ({
  type: SET_CHANGE_MIN_PRICE,
  payload,
});

export const setChangeMaxPriceAction = (payload: number): SetChangeMaxPriceAction => ({
  type: SET_CHANGE_MAX_PRICE,
  payload,
});

export const setResetFilterAction = (): SetResetFilterAction => ({
  type: SET_RESET_FILTER,
});

export const setVisibleNoFilterAction = (payload: boolean): SetVisibleNoFilterAction => ({
  type: SET_VISIBLE_NO_FILTER,
  payload,
});

export const setVisiblePagesAction = (payload: boolean): SetVisiblePagesAction => ({
  type: SET_VISIBLE_PAGES,
  payload,
});
