import { ProductCategory } from '../utils/types';
import {
  CategoriesState,
  CategoriesActionTypes,
  LOAD_CATEGORIES_CATALOG,
  LOAD_CATEGORIES_BOTTOM_LINE,
  LOAD_CATEGORIES_MENU_2,
  LOAD_CATEGORIES_MENU_3,
  LoadCategoriesCatalogAction,
  LoadCategoriesBottomLineAction,
  LoadCategoriesMenu2Action,
  LoadCategoriesMenu3Action,
} from './types/categoriesReducer';

const defaultState: CategoriesState = {
  categoriesCatalog: [],
  categoriesBottomLine: [],
  categoriesMenu2: [],
  categoriesMenu3: [],
};

export const categoriesReducer = (state = defaultState, action: CategoriesActionTypes): CategoriesState => {
  switch (action.type) {
    case LOAD_CATEGORIES_CATALOG:
      return { ...state, categoriesCatalog: action.payload };
    case LOAD_CATEGORIES_BOTTOM_LINE:
      return { ...state, categoriesBottomLine: action.payload };
    case LOAD_CATEGORIES_MENU_2:
      return { ...state, categoriesMenu2: action.payload };
    case LOAD_CATEGORIES_MENU_3:
      return { ...state, categoriesMenu3: action.payload };
    default:
      return state;
  }
};

export const loadCategoriesCatalogAction = (payload: ProductCategory[]): LoadCategoriesCatalogAction => ({
  type: LOAD_CATEGORIES_CATALOG,
  payload,
});

export const loadCategoriesBottomLineAction = (
  payload: ProductCategory[],
): LoadCategoriesBottomLineAction => ({ type: LOAD_CATEGORIES_BOTTOM_LINE, payload });

export const loadCategoriesMenu2Action = (payload: ProductCategory[]): LoadCategoriesMenu2Action => ({
  type: LOAD_CATEGORIES_MENU_2,
  payload,
});

export const loadCategoriesMenu3Action = (payload: ProductCategory[]): LoadCategoriesMenu3Action => ({
  type: LOAD_CATEGORIES_MENU_3,
  payload,
});
