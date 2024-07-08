export type FilterType = { id: number; name: string; count: number };

export interface FilterProductState {
  badges: FilterType[];
  authors: FilterType[];
  publishers: FilterType[];
  manufacturers: FilterType[];
  bindings: FilterType[];

  changeBadges: number[];
  changeAuthors: number[];
  changePublishers: number[];
  changeManufacturers: number[];
  changeBindings: number[];

  isStock: boolean;
  changeMinPrice: number;
  changeMaxPrice: number;
  visibleNoFilter: boolean;
  visiblePages: boolean;
}

export const SET_BADGES = 'SET_BADGES';
export const SET_AUTHORS = 'SET_AUTHORS';
export const SET_PUBLISHERS = 'SET_PUBLISHERS';
export const SET_MANUFACTURERS = 'SET_MANUFACTURERS';
export const SET_BINDINGS = 'SET_BINDINGS';

export const SET_CHANGE_BADGES = 'SET_CHANGE_BADGES';
export const DEL_CHANGE_BADGES = 'DEL_CHANGE_BADGES';
export const SET_CHANGE_AUTHORS = 'SET_CHANGE_AUTHORS';
export const DEL_CHANGE_AUTHORS = 'DEL_CHANGE_AUTHORS';
export const SET_CHANGE_PUBLISHERS = 'SET_CHANGE_PUBLISHERS';
export const DEL_CHANGE_PUBLISHERS = 'DEL_CHANGE_PUBLISHERS';
export const SET_CHANGE_MANUFACTURERS = 'SET_CHANGE_MANUFACTURERS';
export const DEL_CHANGE_MANUFACTURERS = 'DEL_CHANGE_MANUFACTURERS';
export const SET_CHANGE_BINDINGS = 'SET_CHANGE_BINDINGS';
export const DEL_CHANGE_BINDINGS = 'DEL_CHANGE_BINDINGS';

export const SET_IS_STOCK = 'SET_IS_STOCK';
export const SET_CHANGE_MIN_PRICE = 'SET_CHANGE_MIN_PRICE';
export const SET_CHANGE_MAX_PRICE = 'SET_CHANGE_MAX_PRICE';

export const SET_RESET_FILTER = 'SET_RESET_FILTER';

export const SET_VISIBLE_NO_FILTER = 'SET_VISIBLE_NO_FILTER';
export const SET_VISIBLE_PAGES = 'SET_VISIBLE_PAGES';

export interface SetBadgesAction {
  type: typeof SET_BADGES;
  payload: FilterType[];
}

export interface SetAuthorsAction {
  type: typeof SET_AUTHORS;
  payload: FilterType[];
}

export interface SetPublishersAction {
  type: typeof SET_PUBLISHERS;
  payload: FilterType[];
}

export interface SetManufacturersAction {
  type: typeof SET_MANUFACTURERS;
  payload: FilterType[];
}

export interface SetBindingsAction {
  type: typeof SET_BINDINGS;
  payload: FilterType[];
}

export interface SetChangeBadgesAction {
  type: typeof SET_CHANGE_BADGES;
  payload: number;
}

export interface DelChangeBadgesAction {
  type: typeof DEL_CHANGE_BADGES;
  payload: number;
}

export interface SetChangeAuthorsAction {
  type: typeof SET_CHANGE_AUTHORS;
  payload: number;
}

export interface DelChangeAuthorsAction {
  type: typeof DEL_CHANGE_AUTHORS;
  payload: number;
}

export interface SetChangePublishersAction {
  type: typeof SET_CHANGE_PUBLISHERS;
  payload: number;
}

export interface DelChangePublishersAction {
  type: typeof DEL_CHANGE_PUBLISHERS;
  payload: number;
}

export interface SetChangeManufacturersAction {
  type: typeof SET_CHANGE_MANUFACTURERS;
  payload: number;
}

export interface DelChangeManufacturersAction {
  type: typeof DEL_CHANGE_MANUFACTURERS;
  payload: number;
}

export interface SetChangeBindingsAction {
  type: typeof SET_CHANGE_BINDINGS;
  payload: number;
}

export interface DelChangeBindingsAction {
  type: typeof DEL_CHANGE_BINDINGS;
  payload: number;
}

export interface SetIsStockAction {
  type: typeof SET_IS_STOCK;
  payload: boolean;
}

export interface SetChangeMinPriceAction {
  type: typeof SET_CHANGE_MIN_PRICE;
  payload: number;
}

export interface SetChangeMaxPriceAction {
  type: typeof SET_CHANGE_MAX_PRICE;
  payload: number;
}

export interface SetResetFilterAction {
  type: typeof SET_RESET_FILTER;
}

export interface SetVisibleNoFilterAction {
  type: typeof SET_VISIBLE_NO_FILTER;
  payload: boolean;
}

export interface SetVisiblePagesAction {
  type: typeof SET_VISIBLE_PAGES;
  payload: boolean;
}

export type FilterProductActionTypes =
  | SetBadgesAction
  | SetAuthorsAction
  | SetPublishersAction
  | SetManufacturersAction
  | SetBindingsAction
  | SetChangeBadgesAction
  | DelChangeBadgesAction
  | SetChangeAuthorsAction
  | DelChangeAuthorsAction
  | SetChangePublishersAction
  | DelChangePublishersAction
  | SetChangeManufacturersAction
  | DelChangeManufacturersAction
  | SetChangeBindingsAction
  | DelChangeBindingsAction
  | SetIsStockAction
  | SetChangeMinPriceAction
  | SetChangeMaxPriceAction
  | SetResetFilterAction
  | SetVisibleNoFilterAction
  | SetVisiblePagesAction;
