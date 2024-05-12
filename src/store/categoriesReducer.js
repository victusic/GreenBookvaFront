const defaultState = {
  categoriesCatalog: [],
  categoriesBottomLine: [],
  categoriesMenu2: [],
  categoriesMenu3: [],
};

const LOAD_CATEGORIES_CATALOG = 'LOAD_CATEGORIES_CATALOG';
const LOAD_CATEGORIES_BOTTOM_LINE = 'LOAD_CATEGORIES_BOTTOM_LINE';
/* Список жанров для меню 1 берётся из нижней линии*/
const LOAD_CATEGORIES_MENU_2 = 'LOAD_CATEGORIES_MENU_2';
const LOAD_CATEGORIES_MENU_3 = 'LOAD_CATEGORIES_MENU_3';

export const categoriesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES_CATALOG:
      return { ...state, categoriesCatalog: [...action.payload] };
    case LOAD_CATEGORIES_BOTTOM_LINE:
      return { ...state, categoriesBottomLine: [...action.payload] };
    case LOAD_CATEGORIES_MENU_2:
      return { ...state, categoriesMenu2: [...action.payload] };
    case LOAD_CATEGORIES_MENU_3:
      return { ...state, categoriesMenu3: [...action.payload] };
    default:
      return state;
  }
};

export const loadCategoriesCatalogAction = (payload) => ({ type: LOAD_CATEGORIES_CATALOG, payload });
export const loadCategoriesBottomLineAction = (payload) => ({ type: LOAD_CATEGORIES_BOTTOM_LINE, payload });
export const loadCategoriesMenu2Action = (payload) => ({ type: LOAD_CATEGORIES_MENU_2, payload });
export const loadCategoriesMenu3Action = (payload) => ({ type: LOAD_CATEGORIES_MENU_3, payload });
