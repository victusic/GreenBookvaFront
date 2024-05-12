const defaultState = {
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

const SET_BADGES = 'SET_BADGES';
const SET_AUTHORS = 'SET_AUTHORS';
const SET_PUBLISHERS = 'SET_PUBLISHERS';
const SET_MANUFACTURERS = 'SET_MANUFACTURERS';
const SET_BINDINGS = 'SET_BINDINGS';

const SET_CHANGE_BADGES = 'SET_CHANGE_BADGES';
const DEL_CHANGE_BADGES = 'DEL_CHANGE_BADGES';
const SET_CHANGE_AUTHORS = 'SET_CHANGE_AUTHORS';
const DEL_CHANGE_AUTHORS = 'DEL_CHANGE_AUTHORS';
const SET_CHANGE_PUBLISHERS = 'SET_CHANGE_PUBLISHERS';
const DEL_CHANGE_PUBLISHERS = 'DEL_CHANGE_PUBLISHERS';
const SET_CHANGE_MANUFACTURERS = 'SET_CHANGE_MANUFACTURERS';
const DEL_CHANGE_MANUFACTURERS = 'DEL_CHANGE_MANUFACTURERS';
const SET_CHANGE_BINDINGS = 'SET_CHANGE_BINDINGS';
const DEL_CHANGE_BINDINGS = 'DEL_CHANGE_BINDINGS';

const SET_IS_STOCK = 'SET_IS_STOCK';
const SET_CHANGE_MIN_PRICE = 'SET_CHANGE_MIN_PRICE';
const SET_CHANGE_MAX_PRICE = 'SET_CHANGE_MAX_PRICE';

const SET_RESET_FILTER = 'SET_RESET_FILTER';

const SET_VISIBLE_NO_FILTER = 'SET_VISIBLE_NO_FILTER';
const SET_VISIBLE_PAGES = 'SET_VISIBLE_PAGES';

export const filterProductsReducer = (state = defaultState, action) => {
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

export const setBadgesAction = (payload) => ({ type: SET_BADGES, payload });
export const setAuthorsAction = (payload) => ({ type: SET_AUTHORS, payload });
export const setPublishersAction = (payload) => ({ type: SET_PUBLISHERS, payload });
export const setManufacturersAction = (payload) => ({ type: SET_MANUFACTURERS, payload });
export const setBindingsAction = (payload) => ({ type: SET_BINDINGS, payload });

export const setChangeBadgesAction = (payload) => ({ type: SET_CHANGE_BADGES, payload });
export const delChangeBadgesAction = (payload) => ({ type: DEL_CHANGE_BADGES, payload });
export const setChangeAuthorsAction = (payload) => ({ type: SET_CHANGE_AUTHORS, payload });
export const delChangeAuthorsAction = (payload) => ({ type: DEL_CHANGE_AUTHORS, payload });
export const setChangePublishersAction = (payload) => ({ type: SET_CHANGE_PUBLISHERS, payload });
export const delChangePublishersAction = (payload) => ({ type: DEL_CHANGE_PUBLISHERS, payload });
export const setChangeManufacturersAction = (payload) => ({ type: SET_CHANGE_MANUFACTURERS, payload });
export const delChangeManufacturersAction = (payload) => ({ type: DEL_CHANGE_MANUFACTURERS, payload });
export const setChangeBindingsAction = (payload) => ({ type: SET_CHANGE_BINDINGS, payload });
export const delChangeBindingsAction = (payload) => ({ type: DEL_CHANGE_BINDINGS, payload });

export const setIsStockAction = (payload) => ({ type: SET_IS_STOCK, payload });
export const setChangeMinPriceAction = (payload) => ({ type: SET_CHANGE_MIN_PRICE, payload });
export const setChangeMaxPriceAction = (payload) => ({ type: SET_CHANGE_MAX_PRICE, payload });

export const setResetFilterAction = () => ({ type: SET_RESET_FILTER });

export const setVisibleNoFilterAction = (payload) => ({ type: SET_VISIBLE_NO_FILTER, payload });
export const setVisiblePagesAction = (payload) => ({ type: SET_VISIBLE_PAGES, payload });
